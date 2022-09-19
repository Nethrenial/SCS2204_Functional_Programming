import DefaultLayout from "../layouts/default";

<DefaultLayout>
    <main className="home">
        <p>
            {
                isAuthenticated ? (pageVisitCount === 1 ? `You have visited this page for the first time!` : `You have visited this page ${pageVisitCount} times!`) : <>Please
                    login or create an account to see page visit counts. <br/> <span>Please keep in mind that logging out will reset
                    page visit count to 0 </span></>
            }
        </p>
    </main>
</DefaultLayout>;
