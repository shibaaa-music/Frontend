// Registrations
export const getRegistrations = () => {
  const stored = localStorage.getItem("ero_registrations");
  if (!stored) {
    return [];
  }
  return JSON.parse(stored);
};

export const addRegistration = (registration) => {
  const registrations = getRegistrations();
  const newRegistration = {
    ...registration,
    id: Date.now().toString(),
    createdAt: Date.now(),
  };
  registrations.push(newRegistration);
  localStorage.setItem("ero_registrations", JSON.stringify(registrations));
  return newRegistration;
};

// Admin
export const checkAdmin = (username, password) => {
  return username === "admin" && password === "admin";
};