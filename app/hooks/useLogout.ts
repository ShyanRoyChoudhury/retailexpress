import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { updateLoggedInStatus } from "../store/features/userLoggedSlice";
import { useRouter } from "next/navigation";


export const useLogout = () => {
    const dispatch: AppDispatch = useDispatch();
    const router = useRouter()
    const logout: React.MouseEventHandler<HTMLDivElement> = () => {
        Cookies.remove('currentUser')
        Cookies.remove('username');
        dispatch(updateLoggedInStatus(false));
        window.location.reload()
    }

    return { logout };
}