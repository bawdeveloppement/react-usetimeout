import useTimeout from "../timeout.hook.js"

const PageNotFound = ({ redirect }) => {
    const navigate = useNavigate();
    return <div>
        Page not found, you will be redirected in {" "}
        {useTimeout(redirect || 3, () => navigate(-1, { replace: true }))}
    </div>
}
