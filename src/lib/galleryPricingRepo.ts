import { prisma } from "@/lib/prisma";
import type { GalleryPricing, GalleryPricingOption } from "@prisma/client";
import type { GalleryPricingConfig, GalleryOption } from "@/types/galleryPricing";

type GalleryPricingWithOptions = GalleryPricing & { options: GalleryPricingOption[] };

function toConfig(row: GalleryPricingWithOptions): GalleryPricingConfig {
  return {
    code: row.code,
    serviceId: row.serviceId ?? undefined,
    formuleLabel: row.formuleLabel,
    includedPhotos: row.includedPhotos,
    basePrice: Number(row.basePrice),
    extraPhotoPrice: Number(row.extraPhotoPrice),
    options: row.options.map(
      (opt): GalleryOption => ({ id: opt.id, label: opt.label, price: Number(opt.price) })
    ),
    updatedAt: row.updatedAt.toISOString(),
  };
}

export async function listGalleryConfigs(): Promise<GalleryPricingConfig[]> {
  const rows = await prisma.galleryPricing.findMany({
    include: { options: true },
    orderBy: { updatedAt: "desc" },
  });
  return rows.map(toConfig);
}

export async function getGalleryConfig(code: string): Promise<GalleryPricingConfig | null> {
  const row = await prisma.galleryPricing.findUnique({
    where: { code },
    include: { options: true },
  });
  return row ? toConfig(row) : null;
}

interface UpsertInput {
  code: string;
  serviceId?: string;
  formuleLabel: string;
  includedPhotos: number;
  basePrice: number;
  extraPhotoPrice: number;
  options: { label: string; price: number }[];
}

export async function upsertGalleryConfig(input: UpsertInput): Promise<GalleryPricingConfig> {
  const row = await prisma.$transaction(async (tx) => {
    const saved = await tx.galleryPricing.upsert({
      where: { code: input.code },
      create: {
        code: input.code,
        serviceId: input.serviceId,
        formuleLabel: input.formuleLabel,
        includedPhotos: input.includedPhotos,
        basePrice: input.basePrice,
        extraPhotoPrice: input.extraPhotoPrice,
      },
      update: {
        serviceId: input.serviceId,
        formuleLabel: input.formuleLabel,
        includedPhotos: input.includedPhotos,
        basePrice: input.basePrice,
        extraPhotoPrice: input.extraPhotoPrice,
      },
    });

    await tx.galleryPricingOption.deleteMany({ where: { galleryPricingId: saved.id } });
    if (input.options.length > 0) {
      await tx.galleryPricingOption.createMany({
        data: input.options.map((opt) => ({
          galleryPricingId: saved.id,
          label: opt.label,
          price: opt.price,
        })),
      });
    }

    return tx.galleryPricing.findUniqueOrThrow({
      where: { id: saved.id },
      include: { options: true },
    });
  });

  return toConfig(row);
}

export async function deleteGalleryConfig(code: string): Promise<void> {
  await prisma.galleryPricing.delete({ where: { code } }).catch(() => {});
}
