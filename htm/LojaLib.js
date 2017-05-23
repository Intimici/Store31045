var mobile = 'nao';
var baseLoja = '../lojas/00031045/';
var baseId = '31045';

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	mobile = 'sim'
}

function MostraEstoque(Cod)
  {
  popup=window.open("/AvisaDispProduto.asp?IDLoja=31045&IDProduto="+Cod+"","Estoque","top=20,left=20,height=360,width=400,scrollbars=no,resizable=no");
  popup.focus();
  return void(0);
  }
  
/* Produto Menu Topo */
function MostraPrecoMenu(PrecoProd,PrecoOri,IDProd){
if(PrecoProd==0 && PrecoOri==0){document.write("&nbsp;");return void(0);}
if(PrecoProd!=PrecoOri){
 document.write("<font style='font-size:12px; color:#a6a6a6;'>de <strike>"+FormatPrice(PrecoOri,'R$')+"</strike></font>&nbsp;|&nbsp;<font style='font-size:14px; color:#CC0000;'>por <b>"+FormatPrice(PrecoProd,'R$')+"</b></font>");
 }
 else{
 document.write("<div style='font-size:14px; color:#CC0000;'>por <b>"+FormatPrice(PrecoProd,'R$')+"</b></div>");
 }
}

function MostraParcelaMenu(PrecoProd,MaxParcelas){
  var ComSem;
  if(PrecoProd==0||MaxParcelas==1||Juros.length==0)return;
  if(MaxParcelas==0||MaxParcelas>Juros.length)MaxParcelas=Juros.length;
  if(Juros[MaxParcelas-1]>0)ComSem=""; else ComSem="sem juros";
  document.write("<div style='font-size:12px; color:#CC0000;'><b>"+MaxParcelas+"X</b> de <b>"+FormatPrecoReais(CalculaParcelaJurosCompostos(PrecoProd,MaxParcelas))+"</b> "+ComSem+"</div>");
}
/* Fim Produto Menu Topo */ 


/* Preço Home e Lista de Produtos */
function MostraPreco(PrecoProd,PrecoOri,IDProd){
if(PrecoProd==0 && PrecoOri==0){document.write("&nbsp;");return void(0);}
if(PrecoProd!=PrecoOri){
 document.write("<font style='font-size:13px; color:#a6a6a6;'>de <strike>"+FormatPrice(PrecoOri,'R$')+"</strike></font>&nbsp;|&nbsp;<font style='font-size:16px; color:#b9519f;'>por <b>"+FormatPrice(PrecoProd,'R$')+"</b></font>");
 }
 else{
 document.write("<div style='font-size:16px; color:#b9519f;'>por <b>"+FormatPrice(PrecoProd,'R$')+"</b></div>");
 }
}

/* Preço Home Lançamento */
function MostraPrecoLanc(PrecoProd,PrecoOri,IDProd){
if(PrecoProd==0 && PrecoOri==0){document.write("&nbsp;");return void(0);}
if(PrecoProd!=PrecoOri){
 document.write("<font style='font-size:16px; color:#a6a6a6;'>de <strike>"+FormatPrice(PrecoOri,'R$')+"</strike></font>&nbsp;|&nbsp;<font style='font-size:23px; color:#b9519f;'>por <b>"+FormatPrice(PrecoProd,'R$')+"</b></font>");
 }
 else{
 document.write("<div style='font-size:23px; color:#b9519f;'>por <b>"+FormatPrice(PrecoProd,'R$')+"</b></div>");
 }
}

/* Parcela Home Lançamento */
function MostraMaxParcelaLanc(PrecoProd,MaxParcelas){
  var ComSem;
  if(PrecoProd==0||MaxParcelas==1||Juros.length==0)return;
  if(MaxParcelas==0||MaxParcelas>Juros.length)MaxParcelas=Juros.length;
  if(Juros[MaxParcelas-1]>0)ComSem=""; else ComSem="sem juros";
  document.write("<div style='font-size:16px; color:#b9519f;'><b>"+MaxParcelas+"X</b> de <b>"+FormatPrecoReais(CalculaParcelaJurosCompostos(PrecoProd,MaxParcelas))+"</b> "+ComSem+"</div>");
}


/* Preço Detalhe */
function MostraPrecoDet(PrecoProd,PrecoOri,Cod){
if(PrecoProd==0 && PrecoOri==0){document.write("&nbsp;");return void(0);}
if(PrecoProd!=PrecoOri){
    document.write("<div style='font-size:18px; color:#a6a6a6;'>de <strike>"+FormatPrice(PrecoOri,'R$')+"</strike></div><div style='font-size:20px; color:#b9519f;'>por <font style='font-size:24px;font-weight:bold;'>"+FormatPrice(PrecoProd,'R$')+"</font></div>");
  }
  else{
    document.write("<div style='font-size:20px; color:#b9519f;'>por <font style='font-size:24px;font-weight:bold;'>"+FormatPrice(PrecoProd,'R$')+"</font></div>");
  }
}

/* Parcela Home e Lista */ 
function MostraMaxParcela(PrecoProd,MaxParcelas){
  var ComSem;
  if(PrecoProd==0||MaxParcelas==1||Juros.length==0)return;
  if(MaxParcelas==0||MaxParcelas>Juros.length)MaxParcelas=Juros.length;
  if(Juros[MaxParcelas-1]>0)ComSem=""; else ComSem="sem juros";
  document.write("<div style='font-size:14px; color:#b9519f;'><b>"+MaxParcelas+"X</b> de <b>"+FormatPrecoReais(CalculaParcelaJurosCompostos(PrecoProd,MaxParcelas))+"</b> "+ComSem+"</div>");
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

function FormatJuros(num){
  num=num.toString().replace(/\$|\,/g,'');
  if(isNaN(num))num="0";
  sign=(num==(num=Math.abs(num)));
  num=Math.floor(num*100+0.50000000001);
  cents=num%100;
  num=Math.floor(num/100).toString();
  if(cents<10)cents="0"+cents;
  for(var i=0;i<Math.floor((num.length-(1+i))/3);i++)num=num.substring(0,num.length-(4*i+3))+'.'+num.substring(num.length-(4*i+3));
  if(num==0&&cents==0)return '0%'; else return ((sign)?'':'-')+' '+num+','+cents+'%';
}


function FormatNum(num){
num=num.toString().replace(/\$|\,/g,'');
if(isNaN(num))num="0";
sign=(num==(num=Math.abs(num)));
num=Math.floor(num*100+0.50000000001);
num=Math.floor(num/100).toString();
for(var i=0;i<Math.floor((num.length-(1+i))/3);i++)num=num.substring(0,num.length-(4*i+3))+'.'+num.substring(num.length-(4*i+3));
return ((sign)?'':'-')+num;
}


/*Função para mostrar parcelamento*/
function fnMaxInstallmentsGrid(PrecoProd,MaxParcelas){
var ComSem;
if(typeof Juros!="undefined"){
if(PrecoProd==0||MaxParcelas==1||Juros.length==0)return "";
if(MaxParcelas==0||MaxParcelas>Juros.length)MaxParcelas=Juros.length;
if(Juros[MaxParcelas-1]>0)ComSem=""; else ComSem="sem juros";
return "<div class=EstParc><b>"+MaxParcelas+"X</b> de <b>"+FormatPrecoReais(CalculaParcelaJurosCompostos(PrecoProd,MaxParcelas))+"</b> "+ComSem+"</div>";
}else{
return "";
}
}

/*Função para mostrar valor formatado*/
function FormatNumber(num){
var num=num.toString().replace(/\$|\,/g,'');
if(isNaN(num))num="0";
sign=(num==(num=Math.abs(num))); num=Math.floor(num*100+0.50000000001); num=Math.floor(num/100).toString();
for(var i=0;i<Math.floor((num.length-(1+i))/3);i++)num=num.substring(0,num.length-(4*i+3))+'.'+num.substring(num.length-(4*i+3));
return ((sign)?'':'-')+num;
}

/*Função para mostrar valor economizado em produtos em promoção*/
function fnShowEconomyGrid(ProdPrice,ProdPriceOri){
if(ProdPrice!=ProdPriceOri && typeof FormatNumber == 'function' && typeof FormatPrice == 'function' ){
return "<div class=Economize>Economize <b>"+ FormatPrice(ProdPriceOri-ProdPrice,'R$') +"</b> ("+ FormatNumber(((ProdPriceOri-ProdPrice)/ProdPriceOri)*100)+"%)";
return "</div>";
}
else{
return "";
}
}

// ZipCode Grid FC - CEP - Begin 
function fnShowCEPGrid(IDProd){
if(FC$.TypeFrt==3){
var sNumCEP=fnGetCookie('CEP'+FC$.IDLoja);
if(sNumCEP==null)sNumCEP="";
sCEP="<div id='idDivCEPFC'>";
sCEP+=" <div id='idDivTitCEP'><img src='"+ FC$.PathImg +"Icon_Frete.svg' width='30px' alt='Calcule o Frete' /></div>";
sCEP+=" <div id='idDivCalcule'>Calcule o Valor do Frete</div>";
sCEP+=" <div id='idDivContentCEP'>";
sCEP+=" <div id='idDivContentFieldsCEP'>";
sCEP+=" <div id='idDivCEPCalc'>";
sCEP+=" <div class='FieldCEP FieldCEPQty'><label>Qtd.</label> <input type='number' id='idQtdZip"+ IDProd +"' value='1'></div>";
sCEP+=" <div class='FieldCEP FieldCEPNum'><input type='text' placeholder='CEP' id='idZip"+ IDProd +"' value='"+ sNumCEP +"'></div>";
sCEP+=" <img src='"+ FC$.PathImg +"IconNewsletter.svg' height='20px' id='idCEPButton' class='FieldCEPBtn' onclick='fnGetShippingValuesProdGrid("+ IDProd +")'>";
sCEP+=" </div>";
sCEP+=" </div>";
sCEP+=" <div id='idDivImgLoadingCEPFC'><img src='"+ FC$.PathImg +"loadingCEP.gif' vspace=3 style='display:none;' id=ImgLoadingCEP></div>";
sCEP+=" <div id='idShippingValues"+ IDProd +"'></div></div>";
sCEP+=" </div>";
sCEP+="</div>";
var oShowCEP=document.getElementById("ShowCEP"+IDProd);
if(oShowCEP)oShowCEP.innerHTML=sCEP;
}
}
function fnGetShippingValuesProdGrid(IDProd){
sCEP=document.getElementById("idZip"+ IDProd).value;
fnSetCookie('CEP'+FC$.IDLoja,sCEP);
if(sCEP==""){document.getElementById("idShippingValues"+IDProd).innerHTML="<span class='freightResult' style=color:#CC0000;>Informe o CEP</span>";return;}
document.getElementById("idShippingValues"+IDProd).innerHTML="";
document.getElementById("ImgLoadingCEP").style.display='';
var iQty=document.getElementById("idQtdZip"+IDProd).value;
if(IDProd)var sParamProd="&idproduto="+ IDProd;
else var sParamProd="";
AjaxExecFC("/XMLShippingCEP.asp","IDLoja="+ FC$.IDLoja +"&qty="+ iQty +"&cep="+ sCEP + sParamProd,false,processXMLCEPGrid,IDProd);
}
function processXMLCEPGrid(obj,IDProd){
var sShipping="";
var oShippingValues=document.getElementById("idShippingValues"+IDProd);
var iErr=ReadXMLNode(obj,"err");if(iErr==null)return;
if(iErr!="0"){
document.getElementById("ImgLoadingCEP").style.display='none';
oShippingValues.innerHTML="<span class='freightResult' style=color:#CC0000;>"+ ReadXMLNode(obj,"msg") +"</span>";
return;
}
oShippingValues.innerHTML="";
var UseCart=ReadXMLNode(obj,"UseCart");
if(UseCart=="False"){
var ProdName=ReadXMLNode(obj,"ProdName");
var ProdRef=ReadXMLNode(obj,"ProdRef");
}
sShipping+="<div class='ZipOptions'>";
var iOpt=ReadXMLNode(obj,"OptQt");
for(var i=1;i<=iOpt;i++){
var OptName=ReadXMLNode(obj,"Opt"+ i +"Name");
var OptImage=ReadXMLNode(obj,"Opt"+ i +"Image");
var OptObs=ReadXMLNode(obj,"Opt"+ i +"Obs");
if(OptObs==null)OptObs="";
sValorFrete=ReadXMLNode(obj,"Opt"+ i +"Value");
if(sValorFrete=="R$ 0,00")sValorFrete="FRETE GRÁTIS";
sShipping+="<div class='ZipOption'>";
sShipping+=" <div class='ZipNameObs'>";
sShipping+=" <div class='ZipName'><b>"+ OptName +"</b> : <span class='ZipObsVal'>"+ OptObs +"</span> : <span class='ZipValue'><b>"+ sValorFrete +"</b></span></div>";
sShipping+=" </div>";
sShipping+="</div>";
}
oShippingValues.innerHTML=sShipping;
oShippingValues.style.display="block";
sShipping+="</div>";
document.getElementById("ImgLoadingCEP").style.display='none';
}
// ZipCode Grid FC - CEP - End 


// Select - Ordenação de Produtos - 29/04/2016
function fnFooter() {
	if(FC$.Page=="Products"){
	    if(iQtdProds>2){
	      var oScript=document.createElement('script');
	      oScript.type='text/javascript';
	      oScript.async=true;
	      oScript.src=FC$.PathHtm+'IncPaginacaoOrder.js';
	      var sAddScript=document.getElementsByTagName('script')[0];
	      sAddScript.parentNode.insertBefore(oScript,sAddScript);
	    }
	}
}

// Refinamento da Busca - Menu Esquerdo - 29/04/2016
function exibeRefinamentoBusca(){
var deleteElement = function( sIdFiltro ) {
var el = document.getElementById(sIdFiltro);
el.parentNode.removeChild(el);
};
var oFiltroBusca = document.getElementById('idUlPathSearchFC');
var oFiltroCat = document.getElementById('idUlPathCatQtFC');
var oFiltroAdic1 = document.getElementById('idUlAdic1QtFC');
var oFiltroAdic2 = document.getElementById('idUlAdic2QtFC');
var oFiltroAdic3 = document.getElementById('idUlAdic3QtFC');
if(!oFiltroBusca)deleteElement('idFiltroResultadoFC');
if(!oFiltroCat)deleteElement('idFiltroCatFC');
if(!oFiltroAdic1)deleteElement('idFiltroAdic1FC');
if(!oFiltroAdic2)deleteElement('idFiltroAdic2FC');
if(!oFiltroAdic3)deleteElement('idFiltroAdic3FC');
var sTabFiltros = document.getElementById('idFiltrosBusca').innerHTML;
if(oFiltroBusca || oFiltroCat || oFiltroAdic1 || oFiltroAdic2 || oFiltroAdic3){
document.getElementById('idExibeFiltrosFC').style.display = 'block';
document.getElementById('idExibeFiltrosFC').innerHTML = sTabFiltros;
}
}

// Funções específicas para a Espiadinha
var oDivShowCartOnPage=null;
var iLastCartOnPage=0;

function ShowCartOnPage(IDLoja,iErr,sMsg,sCartText,sCheckoutText,este){
  var oPos=getPos(este);
  if(oDivShowCartOnPage==null){
    var oNewElement=document.createElement("div");
    oNewElement.setAttribute("id","DivShowCartOnPage"); 
    oDivShowCartOnPage=este.parentNode.insertBefore(oNewElement,este);
  }
  oDivShowCartOnPage.style.backgroundColor="#e3e3e3";
  oDivShowCartOnPage.style.border="1px solid #078e07";
  oDivShowCartOnPage.style.borderRadius="5px";
  oDivShowCartOnPage.style.MozBorderRadius="5px";
  oDivShowCartOnPage.style.color="#ffffff";
  oDivShowCartOnPage.style.width="186px";
  oDivShowCartOnPage.style.height="auto";
  oDivShowCartOnPage.style.marginTop="0px";
  oDivShowCartOnPage.style.marginLeft="0px";
  oDivShowCartOnPage.style.marginBottom="5px";
  oDivShowCartOnPage.style.position="absolute";
  oDivShowCartOnPage.style.zIndex="1";
  oDivShowCartOnPage.style.visibility="visible";
  if(iErr==0)sBackColor="e3e3e3"; else sBackColor="e3e3e3"
  var sHTML="<table cellpadding=0 cellspacing=0 width=180 align=center border=0>";
     sHTML+="<tr><td align=center colspan=2 style='background-color:#"+ sBackColor +";color:#078e07;font-weight:700;font-size:14px;line-height:14px;padding-top:3px;padding-bottom:3px;cursor:pointer'>"+ sMsg +"</td></tr>";
     if(iErr==0){
       sHTML+="<tr height=20><td align=center><a href='/addproduto.asp?idloja="+ IDLoja +"' target='_top' style='color:#5f5f5f;text-decoration:none;font-size:13px;text-transform:uppercase'>"+ sCheckoutText +"</a></td>";
       sHTML+="<td align=center width=18><img src='images/cancel_off.png' hspace=5 style='cursor:pointer' onclick=oDivShowCartOnPage.style.visibility='hidden'></td></tr>";
     }
     else{
       sHTML+="<tr height=20>";
       sHTML+="<td colspan=2 align=center><img src='images/cancel_off.png' hspace=5 style='cursor:pointer' onclick=oDivShowCartOnPage.style.visibility='hidden'></td>";
       sHTML+="</tr>";
     }
     sHTML+="</table>";
  oDivShowCartOnPage.style.top="-36px";
  oDivShowCartOnPage.style.left="28px";
  oDivShowCartOnPage.innerHTML=sHTML;
  iLastCartOnPage++;
  setTimeout("if(iLastCartOnPage=="+ iLastCartOnPage +")oDivShowCartOnPage.style.visibility='hidden';",5000);
}

// Função Cookie //
function fnGetCookie(name){
var arg=name+"=";
var alen=arg.length;
var clen=document.cookie.length;
var i=0;
while (i<clen){
var j=i+alen;
if(document.cookie.substring(i,j)==arg)return fnGetCookieVal(j);
i=document.cookie.indexOf(" ",i)+1;
if(i==0)break;
}
return null;
}
function fnGetCookieVal(offset){
var endstr=document.cookie.indexOf(";",offset);
if (endstr==-1)endstr=document.cookie.length;
return unescape(document.cookie.substring(offset,endstr));
}
function fnSetCookie(name,value){
var argv=fnSetCookie.arguments;
var argc=fnSetCookie.arguments.length;
var expires=(argc>2)?argv[2]:null;
var path=(argc>3)?argv[3]:null;
var domain=(argc>4)?argv[4]:null;
var secure=(argc>5)?argv[5]:false;
document.cookie=name+"="+escape(value)+((expires==null)?"":(";expires=" + expires.toGMTString()))+((path==null)?"":(";path="+path))+((domain==null)?"":(";domain="+domain))+((secure==true)?"; secure":"");
}

