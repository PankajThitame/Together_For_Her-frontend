import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useContext(AuthContext);

  const from = location.state?.from || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:9090/api/auth/login-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ username, password }),
      }); 

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("userid", JSON.stringify(data.user.id));

        login(data.user, data.token);

        if (data.user.role === "ADMIN") {
          navigate("/admin/dashboard", { replace: true });
        } else {
          navigate(from, { replace: true });
        }
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error("Error during login:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md animate-fade-in">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Login</h2>

        {error && <p className="text-red-600 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="font-medium text-gray-700 mb-1">Email</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 font-semibold text-white rounded-md transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
  );
};

export default LoginForm;
