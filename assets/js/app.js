document.addEventListener('DOMContentLoaded', () => {
    ham = document.getElementById('hamburger')
    menu = document.getElementById('navmenu')
    navbar = document.getElementById('nav-bar')
    ham.addEventListener('click',()=>{
        //alert('ok')
        menu.classList.toggle('navmenu_show')
        navbar.classList.toggle('navbar_show');
    })


    const images = ["assets/images/a.jpg", "assets/images/b.jpg", "assets/images/c.jpg","assets/images/d.jpg"];
    var imagedivarray = []
    var navigate_bar_array = []
    var i=0
    landing()
    function landing()
        {
            land = document.getElementById('landingpage')

            for(i=0;i<images.length;i++)
                {
                    var imgdiv = document.createElement("div")
                    var img = document.createElement("img")
                    img.setAttribute('src',images[i])
                    img.classList.add('wallpaper_img')
                    imgdiv.setAttribute('class','wallpaper')
                    imgdiv.appendChild(img)
                    land.appendChild(imgdiv)

                    var main_nav_box = document.getElementById("nav_bar_container")
                    var nav_bar = document.createElement("div")
                    nav_bar.setAttribute('class','nav_bar')
                    main_nav_box.appendChild(nav_bar)

                    if (i!=0)
                    {
                      imgdiv.classList.add('hidden')

                      //imgdiv.setAttribute('class','hidden')
                    }
                    if (i==0)
                    {
                      nav_bar.setAttribute('show','active')
                      nav_bar.classList.add('nav_selected')
                    }
                    imagedivarray.push(imgdiv)
                    navigate_bar_array.push(nav_bar)
                }
                i=0
        }

        var next = document.getElementById('next')
        var prev = document.getElementById('previous')
        next.addEventListener('click',next_wall)
        prev.addEventListener('click',previous_wall)
        function next_wall()
        {
          i = i + 1
          if (i === imagedivarray.length)
          {
            i=0
          }
          //alert('next'+i)
          for(j=0;j<imagedivarray.length;j++)
          {
             if (imagedivarray[j].classList.contains('hidden'))
             {
               if (j === i){
                  imagedivarray[j].classList.remove('hidden')
                  navigate_bar_array[j].classList.add('nav_selected')
               }
             }
             else
             {
               imagedivarray[j].classList.add('hidden')
               navigate_bar_array[j].classList.remove('nav_selected')
             }
          }
        }
        function previous_wall()
        {
          i = i - 1
          if (i === -1)
          {
            i=imagedivarray.length-1
          }
          //alert('next'+i)
          for(j=0;j<imagedivarray.length;j++)
          {
             if (imagedivarray[j].classList.contains('hidden'))
             {
               if (j === i){
                  imagedivarray[j].classList.remove('hidden')
                  navigate_bar_array[j].classList.add('nav_selected')
               }
             }
             else
             {
               imagedivarray[j].classList.add('hidden')
               navigate_bar_array[j].classList.remove('nav_selected')
             }
          }
        }
//document.cookie = "csrftoken= BrFUjidB8YB9PkVaK2duovS9mOxL1H9YUHjnYGlWuPf3XjVx7vGLggj9PA;SameSite=None; Secure"
//document.cookie = "ajs_user_id= %2257d23b52-24d4-5886-aca4-6b8933b9f7ec%22;SameSite=None; Secure"
//document.cookie = "ajs_anonymous_id= %2224be0ba9-7645-41ac-b36e-1b97c1996247%22;SameSite=None; Secure"

// var decodedCookie = decodeURIComponent(document.cookie)
// var ca = decodedCookie.split(';')
// alert(ca)
// //var a  = document.cookie
// for (let k=0;k<ca.length;k++)
// {
//   if (ca[k].getCookie("SameSite") !== "None")
//   {
//     document.cookie =ca[k].getcookie("Name")+'='+ca[k].getCookie("Value")+';SameSite=None;Secure'
//   }
// }
//alert(document.cookie)
//console.log(document.cookie)

})
