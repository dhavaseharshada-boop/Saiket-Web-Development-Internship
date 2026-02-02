function addBlog() {
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;

    if (title === "" || content === "") {
        alert("Please fill all fields");
        return;
    }

    var blogDiv = document.createElement("div");
    blogDiv.className = "blog-post";

    blogDiv.innerHTML = "<h3>" + title + "</h3><p>" + content + "</p>";

    document.getElementById("blogs").appendChild(blogDiv);

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
}
