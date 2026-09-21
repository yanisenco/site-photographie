export interface GalleryOption {
  id: string;
  label: string;
  price: number;
}

export interface GalleryPricingConfig {
  code: string;
  serviceId?: string;
  formuleLabel: string;
  includedPhotos: number;
  basePrice: number;
  extraPhotoPrice: number;
  options: GalleryOption[];
  updatedAt: string;
}

export interface PriceBreakdown {
  formuleLabel: string;
  includedPhotos: number;
  selectedPhotosCount: number;
  extraPhotosCount: number;
  extraPhotoPrice: number;
  basePrice: number;
  extraPhotosCost: number;
  selectedOptions: GalleryOption[];
  optionsCost: number;
  total: number;
}

export function computePriceBreakdown(
  config: GalleryPricingConfig,
  selectedPhotosCount: number,
  selectedOptionIds: string[]
): PriceBreakdown {
  const extraPhotosCount = Math.max(0, selectedPhotosCount - config.includedPhotos);
  const extraPhotosCost = extraPhotosCount * config.extraPhotoPrice;
  const selectedOptions = config.options.filter((option) => selectedOptionIds.includes(option.id));
  const optionsCost = selectedOptions.reduce((sum, option) => sum + option.price, 0);
  const total = config.basePrice + extraPhotosCost + optionsCost;

  return {
    formuleLabel: config.formuleLabel,
    includedPhotos: config.includedPhotos,
    selectedPhotosCount,
    extraPhotosCount,
    extraPhotoPrice: config.extraPhotoPrice,
    basePrice: config.basePrice,
    extraPhotosCost,
    selectedOptions,
    optionsCost,
    total,
  };
}
