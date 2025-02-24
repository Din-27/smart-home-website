import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { GoogleLogin } from "@react-oauth/google";
import { setCredentials } from "../redux/slice/auth";

export default function Auth() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    try {
      dispatch(setCredentials({ user: "test", token: "tesst" }));
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  const handleAuthenticationWithGoogle = async () => {
    try {
      dispatch(setCredentials("data"));
      navigate("/");
    } catch (error) {
      console.error("Login gagal:", error);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex justify-center items-center">
      <div className="flex-2 lg:block hidden">
        <img loading="lazy" src="/img/bagel.png" alt="" />
      </div>
      <div className="lg:w-1/2 w-2/3">
        <div className="space-y-8 lg:py-0 py-14 lg:px-24 px-0">
          <h4 className="text-xl font-bold">Nice to see you again</h4>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 py-2 rounded-lg text-white font-bold"
            >
              Sign In
            </button>
          </div>
          <div className="h-0.5 bg-gray-200 rounded-full" />
          <div>
            <GoogleLogin
              onSuccess={handleAuthenticationWithGoogle}
              onError={() => console.log("Login gagal")}
              useOneTap
            />
          </div>
          <div className="text-center">
            <p>
              Sudah punya akun?{" "}
              <span
                onClick={() => navigate("/register")}
                className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
              >
                Register sekarang
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
