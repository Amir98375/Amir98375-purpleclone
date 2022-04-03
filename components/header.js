function data(){
    let c  = JSON.parse(localStorage.getItem('cartitems'))

    return `<div id="navbar_container">

    <div id="nav1">
        <div class="underdiv"> <i style="margin-right: 5px;" class="fas fa-mobile"></i>DOWNLOAD  APP</div>
        <div class="underdiv1">SUPPORT</div>
        <div class="underdiv2">TRACK ORDER</div>
      </div>
    </div>
    <div id="nav2">
    <div id="underdiv21">
        <img id="purpleimg" src="/purple.JPG" alt="">
    </div>
    <div id="underdiv22">
        
        <div class="para" id="hoverpara">SHOP CATEGORIES
         <div class="submenu1">
            <div id="subline1">
               <h6>FACE MEAKUP</h6>
                <p><a href="topbrands.html">foundation</a></p>
                <p><a href="/topbrands.html">BB & CC creame</a></p>
                <p><a href="/topbrands.html">blush</a></p>
                <p><a href="/topbrands.html">primer</a></p>
                <p><a href="/topbrands.html">conter</a></p>
                <p><a href="/topbrands.html">blonzer</a></p>
                <p><a href="/topbrands.html">makeup remover</a></p>
                <p><a href="/topbrands.html">sindoor</a></p>
                <h6>EYE MEAKUP</h6>
                <p><a href="/skincare.html">eye liner</a></p>
                <p><a href="/topbrands.html">eye shadow</a></p>
                <p><a href="/topbrands.html">kajal</a></p>
                <p><a href="/topbrands.html">eylink</a></p>
            </div>
            <div id="subline2">
                <h6>HAIR CARE</h6>
                <p><a href="hairstyle.html">hairdrye</a></p>
                <p><a href="/hairstyle.html">oil</a></p>
                <p><a href="/hairstyle.html">headshoulder</a></p>
                <p><a href="/hairstyle.html">clearoff</a></p>
                <p><a href="/foundation.html">vatika</a></p>
                <p><a href="/hairstyle.html">pantene</a></p>
                <p><a href="/skincare.html">hair dryer</a></p>
                <p><a href="/foundation.html">treachup</a></p>
                <h6>SKIN CARE</h6>
                <p><a href="/skincare.html">eye care</a></p>
                <p><a href="/skincare.html">eye serum</a></p>
                <p><a href="/skincare.html">cleanser</a></p>
                <p><a href="/skincare.html">cleanser</a></p>
    
            </div>
            <div id="subline2">
                <h6>BRUSHES AND TOOLS</h6>
                <p><a href="/facemake.html">eyliner</a></p>
                <p><a href="/facemake.html">eye brush</a></p>
                <p><a href="/facemake.html">lip brush</a></p>
                <p><a href="/facemake.html">forehead brush</a></p>
                <p><a href="/facemake.html">tweezers</a></p>
                <p><a href="/facemake.html">mirror</a></p>
                <p><a href="/facemake.html">sharpner</a></p>
                <p><a href="/facemake.html">cleaner</a></p>
                <h6>NAILS</h6>
                <p><a href="/facemake.html">nail cutter</a></p>
                <p><a href="/facemake.html">nail polish</a></p>
                <p><a href="/facemake.html">eyesmart</a></p>
                <p><a href="/facemake.html">eye shadow</a></p>
            </div>
            <div id="subline2">
                <h6>LIP MAKEUP</h6>
                <p><a href="/datalipstick.html">lipststick</a></p>
                <p><a href="/datalipstick.html">liploss</a></p>
                <p><a href="/datalipstick.html">liquid lipststick</a></p>
                <p><a href="/datalipstick.html">lip stains</a></p>
                <p><a href="/datalipstick.html">lip stains</a></p>
                <p><a href="/datalipstick.html">lip tints</a></p>
                <p><a href="/datalipstick.html">lip balm</a></p>
                <p><a href="/datalipstick.html">lip liner</a></p>
                <h6><a href="/datalipstick.html">lip tints</a></h6>
                <p><a href="/datalipstick.html">nail cutter</a></p>
                <p><a href="/datalipstick.html">nail polish</a></p>
                <p><a href="/datalipstick.html">eye shadow</a></p>
                <p><a href="/datalipstick.html">lip balm</a></p>
               
            </div>
         </div>
        </div>
        <div class="para1" id="hoverpara">BRANDS
        <div id="submenubrand">
            <div id="subline12">
                <h6>TOP BRAND</h6>
                <p>mayblline</p>
                 <p><a href="/foundation.html">Lakme</a></p>
                 <p><a href="/foundation.html">mak</a></p>
                 
                 <p><a href="/foundation.html">founf</a></p>
                 <p><a href="/foundation.html">lakme</a></p>
                 <p><a href="/foundation.html">l'oreal</a></p>
                 <p><a href="/foundation.html">colorbar</a></p>
                 <p><a href="/foundation.html">wet n wild</a></p>
                 
                 <p><a href="/foundation.html">suger</a></p>
                 <p><a href="/foundation.html">good vibes</a></p>
                 <p><a href="/foundation.html">vanya</a></p>
                 <p><a href="/foundation.html">vaseline</a></p>
                
             </div>
             <div id="subline13">
                 <h6 style="margin-left: 90px; color: black;">MOST VIEWED</h6>
                 <img id="mostviewed" src="/mostviewed.JPG" alt="">
             </div>
        </div>
    
        </div>
        <div class="para2" id="hoverpara">OFFERS</div>
        <div class="para3" id="hoverpara">NEW</div>
        <div class="para4" id="hoverpara">SPULRGE</div>
        <div class="para5" id="hoverpara">MAGZINE</div>
    
    </div>
    <div id="underdiv23">
      <p id="fontawesome"> <i class="fas fa-search"></i></p>
       
       <div id="signin">
        <img id="signimg" src="/signimg.JPG" alt="">
        <div id="signindiv">
    
            <button id="button"><a href="signin.html" style="color: white;">Sign  in</a></button>
            <p class="para">new customer?<a href="signup.html" style="color: #ff147b;">start here</a></p>
            <hr style="color: gray;">
    
            <p class="para">your order</p>
            <p class="para">your account</p>
            <p class="para">your beuty profile</p>
            <p class="para">your Elite membership</p>
            <p class="para">Purple wallet</p>
           
            <p class="para">become a seller?<a href="signup.html" style="color: #ff147b;">Rgister now</a></p> </p>
    
        </div>
       </div>
        
      <a href="../cart.html"><p id="fontawesome"><i class="fas fa-shopping-cart"></i><sup style="color:red;vertical-align: super;font-size: 25px;">${c.length}</sup></p></a>  
      
       
    
    </div>
    
   
</div>`
}
export default data;