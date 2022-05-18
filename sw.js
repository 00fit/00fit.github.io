<script src="js/addtohomescreen.js"></script>
    <script>
        addToHomescreen( {
            appID: "io.github.00fit",
            appName: "00fit",
            lifespan: 15,
            autostart: true,
            skipFirstVisit: true,
            minSessions: 1,
            displayPace: 0,
            customPrompt: {
                title: "Install 00fit?",
                src: "meta/favicon-96x96.png",
                cancelMsg: "Cancel",
                installMsg: "Install"
            }
        } );
    </script>
