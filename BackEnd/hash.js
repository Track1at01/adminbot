import bcrypt from "bcrypt";

const password = "$2b$10$iVFGjLmKIbA.z491kTqLkus0pF73ngsVGZBijGKhSVPPk4iw8qaB2"; // ← tu contraseña real

bcrypt.hash(password, 10).then(hash => {
  console.log("Hash generado:");
  console.log(hash);
});