<script>
    // JavaScript to hide the navigation bar after the first scroll
    var scrolled = false;

    window.addEventListener("scroll", function () {
        if (!scrolled) {
            // First scroll event
            scrolled = true;
            // Show the navigation bar by removing the 'hidden' class
            document.querySelector("header").classList.remove("hidden");
        }
    });
</script>
