import { PropsWithChildren, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "../redux/store";

export default function PrivateRoute({ children }: PropsWithChildren) {
  const navigate = useNavigate();
  const { token, user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!token && !user) {
      navigate("/auth");
    } else {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  return children;
}
