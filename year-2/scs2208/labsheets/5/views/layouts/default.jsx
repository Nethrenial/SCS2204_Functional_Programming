<html lang="en">
<head>
    <meta charset="UTF-8"/>
</head>
<link rel="stylesheet" href="/style.css"/>
<title>{title}</title>
<body>
<header className="default-header">
    <div className="brand">
        <p>Page Visit Counter</p>
    </div>
    <div className="auth-buttons">
        {isAuthenticated ? (
            <form action="/auth/logout" method="post">
                <button className="logout-btn">Logout</button>
            </form>
        ) : (
            <>
            <a href="/auth/login">Login</a>
            <a href="/auth/register">Signup</a>
            </>
            )}
    </div>

</header>
{children}
</body>
</html>;
