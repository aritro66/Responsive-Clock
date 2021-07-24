setInterval(()=>{

    let hour=document.getElementById('hour');
    let minute=document.getElementById('minute');
    let second=document.getElementById('second');
    let date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    let dh=(h<10)?'0'+String(h):(h<=12)?String(h):(h-12<10)?("0"+String(h-12)):String(h-12);
    let dm=(m>=10)?String(m):("0"+String(m));
    let ds=(s>=10)?String(s):("0"+String(s));
    let time_am_pm=(h>=12)?'PM':'AM';

    document.getElementById('content').innerHTML=`${dh+':'+dm+':'+ds+' '+time_am_pm}`;
    
    hour.style.transform=`rotate(${h*30+m/2}deg)`;
    minute.style.transform=`rotate(${m*6}deg)`;
    second.style.transform=`rotate(${s*6}deg)`;

}
    ,);
