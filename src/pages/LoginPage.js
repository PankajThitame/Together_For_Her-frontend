import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-300 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
