const loginUser = async (email, password) => {
    const response = await fetch(`${import.meta.env.VITE_ACCOUNT_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Nie udało się zalogować.");
    }
    const data = await response.json();
    const { userId: id, photoUrl, username, name, surname, email: userEmail, roleId: role, token } = data;
    return { id, photoUrl, username, name, surname, email: userEmail, role, token };
  };
  
  export { loginUser };
  