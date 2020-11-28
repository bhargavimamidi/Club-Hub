
var clubs=[];
var links=[];
//let linkcontainer;

function checking_boxes()
{ 
    
    var el = document.getElementById('survey');
    var hd = document.getElementsByClassName('heading')[0];
    var qualities = el.getElementsByTagName('input');
    //console.log(qualities);
    var b = document.getElementById('buttons');
    for (var i=0;i<qualities.length; i++)
    {
        if(qualities[i].checked==true)
        {
            clubs.push(qualities[i].value);
            links.push(qualities[i].id);
        }
    }
    el.style.display = "none";
    b.style.display = "none";

    
    while(hd.hasChildNodes())
    {
        hd.removeChild(hd.firstChild);
    }
    var newheader = document.createElement(`div`);
    newheader.classList.add(`text`);
    var random = document.getElementsByClassName("heading")[0];
    newheader.innerHTML = "Clubs suitable for you"
    random.append(newheader);
    displaying_clubs();
    
}
function displaying_clubs()
{
    var displayclub = document.createElement(`div`);
    displayclub.classList.add(`ts`);
    var displayClubs = document.getElementsByClassName(`display_clubs`)[0] ;
    for(var i=0;i<clubs.length;i++)
    {
        //alert(clubs[i]);
        document.getElementById(clubs[i]).style.display="block";
        /*var displayClubContent = '<div>' + clubs[i]  + 
        '<a class="linkcontent" target="_blank">  Details </a>' + '</div>';

        '<img src="t.jfif" alt="clubs[i]" style="width:142px;height:142px;">'+
        '<a class="linkcontent">details</a>';*/
        
        
        
        
        //displayclub.innerHTML+= displayClubContent;
    }
    displayClubs.append(displayclub);
    for(var i=0;i<clubs.length;i++)
    {
        var anchor=document.getElementsByClassName("linkcontent")[i];
        console.log(anchor);
        var att=document.createAttribute("href");
        att.value=links[i];
        anchor.setAttributeNode(att)
    }

}