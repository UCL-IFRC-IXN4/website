

function show_hide_f()
{
    document.getElementById("text-func").style.display = "inline";
    document.getElementById("text-nonfunc").style.display =  "none";

}

function show_hide_n()
{
    document.getElementById("text-nonfunc").style.display = "inline";
    document.getElementById("text-func").style.display =  "none";
}

function hideShow(week)
{
    const posts = document.querySelectorAll('.blog-entry');
    const drop_btns = document.querySelectorAll('.blog-drpd');
    c = posts.length;

    console.log(posts)

    for (let i = 0; i < c; i++)
    {
        if (drop_btns[i].innerHTML == "Week " + week)
        {
            posts[i].style.display = "inline";
            console.log("Week " + week);
        }
        else
        {
            posts[i].style.display = "none";
        }

    }



}