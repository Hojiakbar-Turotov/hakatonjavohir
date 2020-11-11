// nav
// navbar icon
function myfunksiyanavbaricon() {
    document.getElementById("navmini").innerHTML = '<div class="sotibolishfixedallfon" onclick="buttononenavfon()"></div><div class=" navmini"><div class="container"><div><a href="./" onclick="buttononenavfon()">Home</a></div><div><a href="#features" onclick="buttononenavfon()">Key Features</a></div><div><a href="#sectiononediv" onclick="buttononenavfon()">Pricing</a></div><div><a href="#sectionthreediv" onclick="buttononenavfon()">Testiminial</a></div><div><a href="#sectionfivediv" onclick="buttononenavfon()">FAQ</a></div><div><a href="#" class="btn" onclick="buttononenav()">Try for free</div></li></div></div>'
}
// for fre all
// one button
function buttononenav() {
    myFunctionend();
    document.getElementById("sotibolishfixedall").innerHTML = '<button class="sotibolishfixedallfon" onclick="buttononenavfon()"></button><div class="sotibolishfixedall"><div id="sectionfivediv"><div class="sectionfivediv text-center"><div class="tarif"><button onclick="myfunksiyaoylik()" id="myfunksiyaidoylik"><div class="oylik active">Oylik</div></button><button onclick="myfunksiyayillik()" id="myfunksiyaidyillik"><div class="yillik">Yillik</div></button></div><div id="yooylikyoyillik"><div id="oylik"><div class="box-6"><p><span class="sent">$0.0</span>/month</p><h4>Lorem, ipsum.</h4><p>Lorem ipsum dolor sit.</p><div class="bg-white"><ul><li><p>Lorem, ipsum.</p></li><li><p>Lorem, ipsum.</p></li><li><p>Lorem, ipsum.</p></li><li><p>Lorem, ipsum.</p></li></ul></div><a href="#" class="btn" onclick="myfunksiyasotibolish()" onclick="myfunksiyasotibolish()">sotib olish</a></div><div class="box-6"><p><span class="sent">$90.0</span>/month</p><h4>Lorem, ipsum.</h4><p>Lorem ipsum dolor sit.</p><div class="bg-white"><ul><li><p>Lorem, ipsum.</p></li><li><p>Lorem, ipsum.</p></li><li><p>Lorem, ipsum.</p></li><li><p>Lorem, ipsum.</p></li></ul></div><a href="#"class="btn" onclick="myfunksiyasotibolish()">sotib olish</a></div></div></div></div></div></div>'
}
// fon
function buttononenavfon() {
    myFunctionend();
}
// sectiontwo
function myfunksiyalauchmoresectiontwo() {
    myFunctionend();
    document.getElementById("lauchmoresectiontwo").innerHTML = '<button class="sotibolishfixedallfon" onclick="buttononenavfon()"></button><div class="container sotibolishfixedall"><p>lorem Lorem ipsum dolor sit amet.Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum impedit modi, dolor deleniti excepturi dicta iure itaque sit et nisi perspiciatis! Nam sapiente deserunt repellendus ipsa alias ad iure reiciendis accusantium animi! Sunt maxime similique error atque voluptates! Consequatur, accusantium rerum. Quis veritatis ex minima itaque beatae inventore eligendi fugiat laudantium, neque nobis quia tenetur molestiae aspernatur sequi quas laboriosam voluptas aperiam, corrupti nam pariatur laborum modi deserunt. Cumque amet eaque repellendus dicta, dolorum quam exercitationem consequatur, eum animi officia, laudantium tempora quia? Sunt obcaecati provident omnis facere iste ullam modi consectetur, asperiores facilis eius excepturi rerum! Veniam fuga expedita aperiam illo, veritatis praesentium reprehenderit amet? Facere vero eaque fuga ipsum, nemo, repudiandae officia magnam illo, dignissimos distinctio soluta! dolor sit amet.Lorem ipsum dolor sit amet.</p></div>';
}
// sectionfivediv
// oylik
function myfunksiyaoylik() {
    document.getElementById("yooylikyoyillik").innerHTML = '<div id="oylik"><div class="box-6"><p><span class="sent">$0.0</span>/month</p><h4>Lorem, ipsum.</h4><p>Lorem ipsum dolor sit.</p><div class="bg-white"><ul><li><p>Lorem, ipsum.</p></li><li><p>Lorem, ipsum.</p></li><li><p>Lorem, ipsum.</p></li><li><p>Lorem, ipsum.</p></li></ul></div><a href="#" class="btn" onclick="myfunksiyasotibolish()">sotib olish</a></div><div class="box-6"><p><span class="sent">$90.0</span>/month</p><h4>Lorem, ipsum.</h4><p>Lorem ipsum dolor sit.</p><div class="bg-white"><ul><li><p>Lorem, ipsum.</p></li><li><p>Lorem, ipsum.</p></li><li><p>Lorem, ipsum.</p></li><li><p>Lorem, ipsum.</p></li></ul></div><a href="#" class="btn" onclick="myfunksiyasotibolish()">sotib olish</a></div></div>'
    document.getElementById("myfunksiyaidoylik").innerHTML = '<div class="oylik active">Oylik</div>';
    document.getElementById("myfunksiyaidyillik").innerHTML = '<div class="yillik">Yillik</div>';
}
// yillik
function myfunksiyayillik() {
    document.getElementById("yooylikyoyillik").innerHTML = '<div id="oylik"><div class="box-6"><p><span class="sent">$10.0</span>/month</p><h4>Lorem, ipsum.</h4><p>Lorem ipsum dolor sit.</p><div class="bg-white"><ul><li><p>Lorem, ipsum.</p></li><li><p>Lorem, ipsum.</p></li><li><p>Lorem, ipsum.</p></li><li><p>Lorem, ipsum.</p></li></ul></div><a href="#" class="btn" onclick="myfunksiyasotibolish()">sotib olish</a></div><div class="box-6"><p><span class="sent">$190.0</span>/month</p><h4>Lorem, ipsum.</h4><p>Lorem ipsum dolor sit.</p><div class="bg-white"><ul><li><p>Lorem, ipsum.</p></li><li><p>bu matn ham</p></li><li><p>uzgaradi</p></li><li><p>Lorem, ipsum.</p></li></ul></div><a href="#" class="btn" onclick="myfunksiyasotibolish()">sotib olish</a></div></div>'
    document.getElementById("myfunksiyaidoylik").innerHTML = '<div class="oylik">Oylik</div>';
    document.getElementById("myfunksiyaidyillik").innerHTML = '<div class="oylik active">Yillik</div>';
}
// sotib olish
function myfunksiyasotibolish() {
    myFunctionend();
    document.getElementById("sotibolish").innerHTML = '<div class="sotibolishfixedallfon" onclick="buttononenavfon()"></div><div class="sotibolish"><form action="../telegramm.php" method="POST" autocomplete="off"><div><label for="user_phone">Raqamingiz:</label><br><input type="tel" name="user_phone"></div><br><div><label for="user_comment" title="ism yoki manzil">Qo\'shimcha qilish:</label><br><textarea name="user_comment" title="ism yoki manzil" rows="5"></textarea></div><button>Jo\'natish</button></form></div>';
}
// Jo'natish
function myfunksiyajunatish() {
    myFunctionend();
    document.getElementById("sotibolish").innerHTML = '<div class="sotibolishfixedallfon" onclick="buttononenavfon()"></div><div class="sotibolish"><h1>O\'zimiz siz bilan bog\'lanamiz</h1><button onclick="buttononenavfon()">Qaytish</button></form></div>';
}
// frequently
//one
function myFunksiyapfrequentleone() {
    myFunctionend();
    document.getElementById("ponefrequentle").innerHTML = ' <span style="display: block;"> Lorem ipsum dolor, sit amet consectetur.  Magni possimus porro autem corporis asperiores sit laboriosam ipsa fugiat cupiditate, animi officiis id laborum, temporibus incidunt accusantium expedita veniam rerum dolores.</span>';
    document.getElementById("mybuttonpfrequentleone").innerHTML = '<button onclick="myFunksiyapfrequentleend()">&minus;</button>';
}
//two
function myFunksiyapfrequentletwo() {
    myFunctionend();
    document.getElementById("ptwofrequentle").innerHTML = ' <span style="display: block;"> Lorem ipsum dolor, sit amet consectetur.  Magni possimus porro autem corporis asperiores sit laboriosam ipsa fugiat cupiditate, animi officiis id laborum, temporibus incidunt accusantium expedita veniam rerum dolores.</span>';
    document.getElementById("mybuttonpfrequentletwo").innerHTML = '<button onclick="myFunksiyapfrequentleend()">&minus;</button>';
}
//three
function myFunksiyapfrequentlethree() {
    myFunctionend();
    document.getElementById("pthreefrequentle").innerHTML = ' <span style="display: block;"> Lorem ipsum dolor, sit amet consectetur.  Magni possimus porro autem corporis asperiores sit laboriosam ipsa fugiat cupiditate, animi officiis id laborum, temporibus incidunt accusantium expedita veniam rerum dolores.</span>';
    document.getElementById("mybuttonpfrequentlethree").innerHTML = '<button onclick="myFunksiyapfrequentleend()">&minus;</button>';
}
//four
function myFunksiyapfrequentlefour() {
    myFunctionend();
    document.getElementById("pfourfrequentle").innerHTML = ' <span style="display: block;"> Lorem ipsum dolor, sit amet consectetur.  Magni possimus porro autem corporis asperiores sit laboriosam ipsa fugiat cupiditate, animi officiis id laborum, temporibus incidunt accusantium expedita veniam rerum dolores.</span>';
    document.getElementById("mybuttonpfrequentlefour").innerHTML = '<button onclick="myFunksiyapfrequentleend()">&minus;</button>';
}
//five
function myFunksiyapfrequentlefive() {
    myFunctionend();
    document.getElementById("pfivefrequentle").innerHTML = ' <span style="display: block;"> Lorem ipsum dolor, sit amet consectetur.  Magni possimus porro autem corporis asperiores sit laboriosam ipsa fugiat cupiditate, animi officiis id laborum, temporibus incidunt accusantium expedita veniam rerum dolores.</span>';
    document.getElementById("mybuttonpfrequentlefive").innerHTML = '<button onclick="myFunksiyapfrequentleend()">&minus;</button>';

}
//<button onclick="myFunksiyapfrequentleend()">&minus;</button>
function myFunksiyapfrequentleend() {
    myFunctionend();
    document.getElementById("ponefrequentle").innerHTML = '';
    document.getElementById("mybuttonpfrequentleone").innerHTML = '<button onclick="myFunksiyapfrequentleone()">&plus;</button>';
    document.getElementById("ptwofrequentle").innerHTML = '';
    document.getElementById("mybuttonpfrequentletwo").innerHTML = '<button onclick="myFunksiyapfrequentletwo()">&plus;</button>';
    document.getElementById("pthreefrequentle").innerHTML = '';
    document.getElementById("mybuttonpfrequentlethree").innerHTML = '<button onclick="myFunksiyapfrequentlethree()">&plus;</button>';
    document.getElementById("pfourfrequentle").innerHTML = '';
    document.getElementById("mybuttonpfrequentlefour").innerHTML = '<button onclick="myFunksiyapfrequentlefour()">&plus;</button>';
    document.getElementById("pfivefrequentle").innerHTML = '';
    document.getElementById("mybuttonpfrequentlefive").innerHTML = '<button onclick="myFunksiyapfrequentlefive()">&plus;</button>';
}
//end
function myFunctionend() {
    document.getElementById("ponefrequentle").innerHTML = '';
    document.getElementById("mybuttonpfrequentleone").innerHTML = '<button onclick="myFunksiyapfrequentleone()">&plus;</button>';
    document.getElementById("ptwofrequentle").innerHTML = '';
    document.getElementById("mybuttonpfrequentletwo").innerHTML = '<button onclick="myFunksiyapfrequentletwo()">&plus;</button>';
    document.getElementById("pthreefrequentle").innerHTML = '';
    document.getElementById("mybuttonpfrequentlethree").innerHTML = '<button onclick="myFunksiyapfrequentlethree()">&plus;</button>';
    document.getElementById("pfourfrequentle").innerHTML = '';
    document.getElementById("mybuttonpfrequentlefour").innerHTML = '<button onclick="myFunksiyapfrequentlefour()">&plus;</button>';
    document.getElementById("pfivefrequentle").innerHTML = '';
    document.getElementById("mybuttonpfrequentlefive").innerHTML = '<button onclick="myFunksiyapfrequentlefive()">&plus;</button>';
    document.getElementById("sotibolishfixedall").innerHTML = '';
    document.getElementById("lauchmoresectiontwo").innerHTML = '';
    document.getElementById("navmini").innerHTML = '';
    document.getElementById("sotibolish").innerHTML = '';
    document.getElementById("kunvatun").innerHTML = '';
}
//kunvatun
function kunvatun() {
    document.getElementById("kunvatun").innerHTML = '<button class="sotibolishfixedallfon" onclick="buttononenavfon()"></button><div class="kunvatun"><div id="kun"><img src="../system/img/kunvatun/kun.jfif" alt="" onclick="kun()"></div><div id="tun"><img src="../system/img/kunvatun/tun.jfif" alt="" onclick="tun()"></div></div>';
}
//kun
function kun() {
    document.getElementById("kuntunfon").innerHTML = '';
}
// tun
function tun() {
    document.getElementById("kuntunfon").innerHTML = '<style>body {background-color: #00000088;} .sotibolishfixedallfon{background-color: #00000099;}</style>';
}
//