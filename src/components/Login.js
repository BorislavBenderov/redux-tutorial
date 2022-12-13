import { useDispatch } from "react-redux";
import { login, logout } from "../feautures/user";

export const Login = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button
                onClick={() => {
                    dispatch(login({ name: 'Borko', age: 0, email: '' }))
                }}>Login</button>
            <button
                onClick={() => {
                    dispatch(logout())
                }}>Logout</button>
        </div>
    );
}