// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // Ajoutez d'autres champs selon vos besoins
});

// Vérifiez si le modèle a déjà été défini (nécessaire pour éviter des erreurs lors de l'utilisation de Next.js)
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
