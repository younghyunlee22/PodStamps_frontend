import  { useNavigate } from "react-router-dom";

const linkData = [
    { name: "Home", linkTo: "/" },
    { name: "Listen", linkTo: "/listen" },
    { name: "All PodStamps", linkTo: "/allpodstamps" },
    { name: "My PodStamps", linkTo: "/mypodstamps" },
    { name: "Quick Save", linkTo: "/quicksave" },
    { name: "Sign In", linkTo: "/signin" },
];

const NavList = () => {
    const navigate = useNavigate();
    return (

        <ul
            className="d-flex flex-row justify-content-between align-items-center"
            style={{margin: "0 1vw"}}
        >
            {linkData.map((data, i) => (
                <li className="nav-item" key={i}>
                    <button
                        className="nav-link btn-primary"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(data.linkTo);
                        }}
                    >
                        {data.name}
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default NavList;