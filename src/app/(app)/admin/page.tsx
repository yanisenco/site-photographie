"use client";

import { useEffect, useState } from "react";
import { SERVICES } from "@/data/services";
import type { GalleryOption, GalleryPricingConfig } from "@/types/galleryPricing";

const CODE_REGEX = /^[A-Z]{3}\d{8}$/;

const emptyForm = {
  code: "",
  serviceId: "",
  formuleLabel: "",
  includedPhotos: "",
  basePrice: "",
  extraPhotoPrice: "",
  options: [] as GalleryOption[],
};

type FormState = typeof emptyForm;

export default function AdminPage() {
  const [checkingSession, setCheckingSession] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loggingIn, setLoggingIn] = useState(false);

  const [configs, setConfigs] = useState<GalleryPricingConfig[]>([]);
  const [loadingConfigs, setLoadingConfigs] = useState(false);

  const [form, setForm] = useState<FormState>(emptyForm);
  const [editingCode, setEditingCode] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const loadConfigs = async () => {
    setLoadingConfigs(true);
    const res = await fetch("/api/admin/galleries");
    if (res.status === 401) {
      setIsAuthenticated(false);
      setLoadingConfigs(false);
      return;
    }
    const data = await res.json();
    setConfigs(data);
    setIsAuthenticated(true);
    setLoadingConfigs(false);
  };

  useEffect(() => {
    (async () => {
      await loadConfigs();
      setCheckingSession(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoggingIn(true);
    setLoginError(null);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
      setPassword("");
      await loadConfigs();
    } else {
      const data = await res.json().catch(() => null);
      setLoginError(data?.error || "Connexion impossible.");
    }
    setLoggingIn(false);
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setIsAuthenticated(false);
    setConfigs([]);
  };

  const resetForm = () => {
    setForm(emptyForm);
    setEditingCode(null);
    setSaveError(null);
  };

  const startEdit = (config: GalleryPricingConfig) => {
    setEditingCode(config.code);
    setForm({
      code: config.code,
      serviceId: config.serviceId || "",
      formuleLabel: config.formuleLabel,
      includedPhotos: String(config.includedPhotos),
      basePrice: String(config.basePrice),
      extraPhotoPrice: String(config.extraPhotoPrice),
      options: config.options,
    });
    setSaveError(null);
  };

  const handleDelete = async (code: string) => {
    if (!confirm(`Supprimer la configuration tarifaire du code ${code} ?`)) return;
    await fetch(`/api/admin/galleries/${code}`, { method: "DELETE" });
    if (editingCode === code) resetForm();
    await loadConfigs();
  };

  const addOptionRow = () => {
    setForm((f) => ({
      ...f,
      options: [...f.options, { id: `opt-${Date.now()}`, label: "", price: 0 }],
    }));
  };

  const updateOptionRow = (index: number, patch: Partial<GalleryOption>) => {
    setForm((f) => ({
      ...f,
      options: f.options.map((opt, i) => (i === index ? { ...opt, ...patch } : opt)),
    }));
  };

  const removeOptionRow = (index: number) => {
    setForm((f) => ({ ...f, options: f.options.filter((_, i) => i !== index) }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveError(null);

    const code = form.code.trim().toUpperCase();
    if (!CODE_REGEX.test(code)) {
      setSaveError("Le code doit être au format 3 lettres majuscules + 8 chiffres (ex. ABC12345678).");
      return;
    }

    setSaving(true);
    const res = await fetch("/api/admin/galleries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code,
        serviceId: form.serviceId || undefined,
        formuleLabel: form.formuleLabel,
        includedPhotos: Number(form.includedPhotos),
        basePrice: Number(form.basePrice),
        extraPhotoPrice: Number(form.extraPhotoPrice),
        options: form.options,
      }),
    });

    if (res.ok) {
      resetForm();
      await loadConfigs();
    } else {
      const data = await res.json().catch(() => null);
      setSaveError(data?.error || "Erreur lors de l'enregistrement.");
    }
    setSaving(false);
  };

  if (checkingSession) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-dark text-custom-white/60 text-sm">
        Chargement…
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-dark px-6">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm bg-custom-white/[0.04] border border-custom-white/10 p-8"
        >
          <p className="text-yellow text-[10px] tracking-[0.25em] uppercase mb-4">Espace privé</p>
          <h1 className="font-serif text-2xl text-custom-white mb-6">Administration</h1>
          <label className="block text-custom-white/50 text-xs tracking-[0.15em] uppercase mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-custom-white/[0.05] border border-custom-white/12 px-4 py-3 text-custom-white focus:outline-none focus:border-yellow/60 transition-colors mb-4"
            autoFocus
          />
          <label className="block text-custom-white/50 text-xs tracking-[0.15em] uppercase mb-2">
            Mot de passe
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-custom-white/[0.05] border border-custom-white/12 px-4 py-3 text-custom-white focus:outline-none focus:border-yellow/60 transition-colors mb-4"
          />
          {loginError && <p className="text-red-400 text-sm mb-4">{loginError}</p>}
          <button
            type="submit"
            disabled={loggingIn}
            className="w-full py-3 bg-orange text-custom-white text-sm font-medium tracking-wide hover:bg-[#e85a30] transition-colors disabled:opacity-40"
          >
            {loggingIn ? "Connexion…" : "Se connecter"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-dark text-custom-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-yellow text-[10px] tracking-[0.25em] uppercase mb-2">Espace privé</p>
            <h1 className="font-serif text-3xl">Tarifs des galeries</h1>
            <p className="text-custom-white/45 text-sm mt-2 max-w-xl">
              Associez un code d&apos;accès galerie à une formule tarifaire pour afficher un prix au
              client pendant sa sélection de photos et dans l&apos;email de confirmation.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="text-custom-white/50 hover:text-custom-white text-xs tracking-[0.15em] uppercase transition-colors"
          >
            Se déconnecter
          </button>
        </div>

        {/* Formulaire */}
        <form
          onSubmit={handleSave}
          className="bg-custom-white/[0.04] border border-custom-white/10 p-6 mb-10 space-y-5"
        >
          <h2 className="font-medium text-custom-white/90">
            {editingCode ? `Modifier la configuration — ${editingCode}` : "Nouvelle configuration"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-custom-white/50 text-xs tracking-[0.15em] uppercase mb-2">
                Code galerie (dossier Cloudinary)
              </label>
              <input
                type="text"
                value={form.code}
                onChange={(e) => setForm((f) => ({ ...f, code: e.target.value.toUpperCase() }))}
                placeholder="ABC12345678"
                maxLength={11}
                disabled={!!editingCode}
                className="w-full bg-custom-white/[0.05] border border-custom-white/12 px-4 py-3 font-mono tracking-wider focus:outline-none focus:border-yellow/60 transition-colors disabled:opacity-50"
              />
            </div>
            <div>
              <label className="block text-custom-white/50 text-xs tracking-[0.15em] uppercase mb-2">
                Service (optionnel)
              </label>
              <select
                value={form.serviceId}
                onChange={(e) => setForm((f) => ({ ...f, serviceId: e.target.value }))}
                className="w-full bg-custom-white/[0.05] border border-custom-white/12 px-4 py-3 focus:outline-none focus:border-yellow/60 transition-colors "
              >
                <option value="">—</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-custom-white/50 text-xs tracking-[0.15em] uppercase mb-2">
              Nom de la formule
            </label>
            <input
              type="text"
              value={form.formuleLabel}
              onChange={(e) => setForm((f) => ({ ...f, formuleLabel: e.target.value }))}
              placeholder="Ex. Signature — 1h — 5 photos"
              className="w-full bg-custom-white/[0.05] border border-custom-white/12 px-4 py-3 focus:outline-none focus:border-yellow/60 transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label className="block text-custom-white/50 text-xs tracking-[0.15em] uppercase mb-2">
                Photos incluses
              </label>
              <input
                type="number"
                min={0}
                value={form.includedPhotos}
                onChange={(e) => setForm((f) => ({ ...f, includedPhotos: e.target.value }))}
                className="w-full bg-custom-white/[0.05] border border-custom-white/12 px-4 py-3 focus:outline-none focus:border-yellow/60 transition-colors"
              />
            </div>
            <div>
              <label className="block text-custom-white/50 text-xs tracking-[0.15em] uppercase mb-2">
                Prix de base (€)
              </label>
              <input
                type="number"
                min={0}
                step="0.01"
                value={form.basePrice}
                onChange={(e) => setForm((f) => ({ ...f, basePrice: e.target.value }))}
                className="w-full bg-custom-white/[0.05] border border-custom-white/12 px-4 py-3 focus:outline-none focus:border-yellow/60 transition-colors"
              />
            </div>
            <div>
              <label className="block text-custom-white/50 text-xs tracking-[0.15em] uppercase mb-2">
                € / photo supplémentaire
              </label>
              <input
                type="number"
                min={0}
                step="0.01"
                value={form.extraPhotoPrice}
                onChange={(e) => setForm((f) => ({ ...f, extraPhotoPrice: e.target.value }))}
                className="w-full bg-custom-white/[0.05] border border-custom-white/12 px-4 py-3 focus:outline-none focus:border-yellow/60 transition-colors"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-custom-white/50 text-xs tracking-[0.15em] uppercase">
                Options en supplément
              </label>
              <button
                type="button"
                onClick={addOptionRow}
                className="text-yellow text-xs tracking-wide hover:opacity-80 transition-opacity"
              >
                + Ajouter une option
              </button>
            </div>
            {form.options.length === 0 && (
              <p className="text-custom-white/30 text-sm">Aucune option pour cette galerie.</p>
            )}
            <div className="space-y-3">
              {form.options.map((option, index) => (
                <div key={option.id} className="flex gap-3 items-center">
                  <input
                    type="text"
                    value={option.label}
                    onChange={(e) => updateOptionRow(index, { label: e.target.value })}
                    placeholder="Ex. Déplacement supplémentaire"
                    className="flex-1 bg-custom-white/[0.05] border border-custom-white/12 px-4 py-2.5 focus:outline-none focus:border-yellow/60 transition-colors"
                  />
                  <input
                    type="number"
                    min={0}
                    step="0.01"
                    value={option.price}
                    onChange={(e) => updateOptionRow(index, { price: Number(e.target.value) })}
                    className="w-28 bg-custom-white/[0.05] border border-custom-white/12 px-4 py-2.5 focus:outline-none focus:border-yellow/60 transition-colors"
                  />
                  <span className="text-custom-white/40 text-sm">€</span>
                  <button
                    type="button"
                    onClick={() => removeOptionRow(index)}
                    className="text-custom-white/40 hover:text-red-400 transition-colors px-2"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          {saveError && <p className="text-red-400 text-sm">{saveError}</p>}

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-3 bg-orange text-custom-white text-sm font-medium tracking-wide hover:bg-[#e85a30] transition-colors disabled:opacity-40"
            >
              {saving ? "Enregistrement…" : editingCode ? "Mettre à jour" : "Créer la configuration"}
            </button>
            {editingCode && (
              <button
                type="button"
                onClick={resetForm}
                className="text-custom-white/50 hover:text-custom-white text-sm transition-colors"
              >
                Annuler
              </button>
            )}
          </div>
        </form>

        {/* Liste */}
        <h2 className="font-medium text-custom-white/90 mb-4">
          Configurations existantes {loadingConfigs && "…"}
        </h2>
        {configs.length === 0 && !loadingConfigs && (
          <p className="text-custom-white/40 text-sm">Aucune configuration tarifaire enregistrée.</p>
        )}
        <div className="space-y-3">
          {configs.map((config) => (
            <div
              key={config.code}
              className="bg-custom-white/[0.04] border border-custom-white/10 p-5 flex items-center justify-between gap-4 flex-wrap"
            >
              <div>
                <p className="font-mono text-yellow tracking-wider text-sm mb-1">{config.code}</p>
                <p className="text-custom-white/90">{config.formuleLabel}</p>
                <p className="text-custom-white/45 text-sm mt-1">
                  {config.includedPhotos} photo{config.includedPhotos > 1 ? "s" : ""} incluse
                  {config.includedPhotos > 1 ? "s" : ""} · {config.basePrice} € · +{config.extraPhotoPrice}{" "}
                  €/photo suppl.
                  {config.options.length > 0 && ` · ${config.options.length} option(s)`}
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => startEdit(config)}
                  className="text-custom-white/60 hover:text-yellow text-xs tracking-[0.15em] uppercase transition-colors"
                >
                  Modifier
                </button>
                <button
                  onClick={() => handleDelete(config.code)}
                  className="text-custom-white/60 hover:text-red-400 text-xs tracking-[0.15em] uppercase transition-colors"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
