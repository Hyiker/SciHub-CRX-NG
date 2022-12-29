// ==UserScript==
// @name         SciHub CRX NG
// @version      7.3.5
// @author       IMQSQ, Hyiker
// @homepage     https://github.com/Hyiker/SciHub-CRX-NG
// @namespace    https://github.com/Hyiker/SciHub-CRX-NG
// @description  👆👆👆 非常好用的SCI文献信息免费获取助手，完美支持 Sci-Hub、Libgen、unpaywall、OA Button、Pubmed 等数据库，访问文献网页时，会在文献DOI/PMID/PMCID后面添加 SciHub CRX 图标，点击图标可获取详细文章信息，如IF、分区、引用次数、文章网页、文章PDF等，点击PDF图标可直接跳转到下载页。同时支持谷歌学术、百度学术、PubMed等三十余个学术期刊网站显示期刊详细等级信息（如收录数据库、JCR分区、IF等），支持翻译功能（谷歌翻译、百度翻译、彩云小译、阿里翻译、必应翻译、搜狗翻译、爱词霸翻译），选中文字按 T 翻译，按 Y 删除翻译（快捷键可更换）。完美支持知网，百度学术，谷歌学术，深度学术，烂番薯学术 ，维普网，知网空间，Scopus，WOS，Springer，IEEE，PubMed，ReadPaper，ScienceDirect 等上百个学术网站。👆👆👆
// @require      https://lib.baomitu.com/limonte-sweetalert2/10.16.6/sweetalert2.all.min.js
// @require      https://lib.baomitu.com/crypto-js/3.3.0/crypto-js.min.js
// @require      https://lib.baomitu.com/jquery/3.6.0/jquery.min.js
// @license      AGPL-3.0-or-later
// @grant        unsafeWindow
// @grant        GM_info
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_openInTab
// @grant        GM_setClipboard
// @grant        GM_registerMenuCommand
// @compatible   chrome
// @compatible   firefox
// @compatible   safari
// @compatible   opera
// @compatible   edge
// @connect      mksa.top
// @connect      sci-hub.ee
// @connect      sci-hub.se
// @connect      sci-hub.st
// @connect      sci-hub.ru
// @connect      sci-hub.wf
// @connect      sci-hub.ren
// @connect      sssam.com
// @connect      ooopn.com
// @connect      qq.com
// @connect      bing.com
// @connect      baidu.com
// @connect      iciba.com
// @connect      sogou.com
// @connect      youdao.com
// @connect      taobao.com
// @connect      google.com
// @connect      alibaba.com
// @connect      caiyunai.com
// @connect      googleapis.com
// @connect      libgen.lc
// @connect      libgen.ee
// @connect      libgen.gs
// @connect      libgen.rocks
// @connect      library.lol
// @connect      booksdl.org
// @connect      crossref.org
// @connect      oadoi.org
// @connect      unpaywall.org
// @connect      openaccessbutton.org
// @connect      ncbi.nlm.nih.gov
// @connect      *
// @match        *://*.sciencedirect.com/*
// @match        *://*.wiley.com/*
// @match        *://*.acs.org/*
// @match        *://*.baidu.com/*
// @match        *://*.tandfonline.com/*
// @match        *://*.nature.com/*
// @match        *://*.accessible.com/*
// @match        *://*.aic.ca/*
// @match        *://*.ajas.info/*
// @match        *://*.adisonline.com/*
// @match        *://*.alexanderstreet.com/*
// @match        *://*.amsciepub.com/*
// @match        *://*.annee-philologique.com/*
// @match        *://*.anthrosource.net/*
// @match        *://*.appliedradiology.com/*
// @match        *://*.arch-anim-breed.net/*
// @match        *://*.aspresolver.com/*
// @match        *://*.atypon.com/*
// @match        *://*.aviationweek.com/*
// @match        *://*.aip.org/*
// @match        *://*.bbsrc.ac.uk/*
// @match        *://*.begellhouse.com/*
// @match        *://*.bepress.com/*
// @match        *://*.bing.com/*
// @match        *://*.biomedcentral.com/*
// @match        *://*.bioon.com.cn/*
// @match        *://*.bioon.com/*
// @match        *://*.biotechniques.com/*
// @match        *://*.blackwell-synergy.com/*
// @match        *://*.bmj.com/*
// @match        *://*.britannica.com/*
// @match        *://*.businessweek.com/*
// @match        *://*.cambridgesoft.com/*
// @match        *://*.cawq.ca/*
// @match        *://*.cell.com/*
// @match        *://*.chadwyck.com/*
// @match        *://*.chemnetbase.com/*
// @match        *://*.china.eastview.com/*
// @match        *://*.chronicle.com/*
// @match        *://*.ci.nii.ac.jp/*
// @match        *://*.citexs.com/*
// @match        *://*.cindasdata.com/*
// @match        *://*.cjc-online.ca/*
// @match        *://*.cnki.com.cn/*
// @match        *://*.cnki.net/*
// @match        *://*.cn-ki.net/*
// @match        *://*.communicationencyclopedia.com/*
// @match        *://*.computerworld.com/*
// @match        *://*.contemporaryobgyn.net/*
// @match        *://*.corporateaffiliations.com/*
// @match        *://*.cqpress.com/*
// @match        *://*.cqvip.com/*
// @match        *://*.crcnetbase.com/*
// @match        *://*.csiro.au/*
// @match        *://*.csis.cn/*
// @match        *://*.datapages.com/*
// @match        *://*.db.chemsources.com/*
// @match        *://*.dccc.chemnetbase.com/*
// @match        *://*.dichtung-digital.de/*
// @match        *://*.discovermagazine.com/*
// @match        *://*.eastview.com/*
// @match        *://*.ebscohost.com/*
// @match        *://*.economist.com/*
// @match        *://*.edu.cn:*/*
// @match        *://*.edu:*/*
// @match        *://*.edu.cn/*
// @match        *://*.edu/*
// @match        *://*.eenews.net/*
// @match        *://*.ejorel.com/*
// @match        *://*.els.net/*
// @match        *://*.emeraldinsight.com/*
// @match        *://*.engineeringvillage.com/*
// @match        *://*.engineeringvillage2.com/*
// @match        *://*.epnet.com/*
// @match        *://*.elsevier.com/*
// @match        *://*.evolutionary-ecology.com/*
// @match        *://*.exacteditions.com/*
// @match        *://*.frymulti.com/*
// @match        *://*.cos.com/*
// @match        *://*.futuremedicine.com/*
// @match        *://*.fyesit.metapress.com/*
// @match        *://*.galegroup.com/*
// @match        *://*.gateway.proquest.com/*
// @match        *://*.geenmedical.com/*
// @match        *://*.genomebiology.com/*
// @match        *://*.global-sci.com/*
// @match        *://*.google.com.co.uk/*
// @match        *://*.google.com.hk/*
// @match        *://*.google.com/*
// @match        *://*.google.nl/*
// @match        *://*.lanfanshu.cn/*
// @match        *://*.mirrors.pw/*
// @match        *://*.panda321.com/*
// @match        *://*.lsqwl.org/*
// @match        *://*.zidianzhan.net/*
// @match        *://*.gpoaccess.gov/*
// @match        *://*.gracescientific.com/*
// @match        *://*.groveart.com/*
// @match        *://*.grovemusic.com/*
// @match        *://*.gut.bmj.com/*
// @match        *://*.harpweek.com/*
// @match        *://*.heart.bmj.com/*
// @match        *://*.hh.um.es/*
// @match        *://*.hindawi.com/*
// @match        *://*.hull.ac.uk/*
// @match        *://*.humankinetics.com/*
// @match        *://*.hwwilson.com/*
// @match        *://*.hwwilsonweb.com/*
// @match        *://*.ias.ac.in/*
// @match        *://*.ibisworld.com/*
// @match        *://*.icevirtual.com/*
// @match        *://*.icf.uab.es/*
// @match        *://*.ida.liu.se/*
// @match        *://*.ihserc.com/*
// @match        *://*.ihsglobalinsight.com/*
// @match        *://*.ijdb.ehu.es/*
// @match        *://*.ijee.ie/*
// @match        *://*.impublications.com/*
// @match        *://*.informahealthcare.com/*
// @match        *://*.informaworld.com/*
// @match        *://*.ingentaconnect.com/*
// @match        *://*.ingentaselect.com/*
// @match        *://*.inpractice.bmj.com/*
// @match        *://*.inspirehep.net/*
// @match        *://*.intelecomonline.net/*
// @match        *://*.int-res.com/*
// @match        *://*.ipap.jp/*
// @match        *://*.isa-arbor.com/*
// @match        *://*.isiknowledge.com/*
// @match        *://*.itn.is/*
// @match        *://*.iwaponline.com/*
// @match        *://*.john-libbey-eurotext.fr/*
// @match        *://*.journalofinfection.com/*
// @match        *://*.jove.com/*
// @match        *://*.jsad.com/*
// @match        *://*.jstage.jst.go.jp/*
// @match        *://*.karger.com/*
// @match        *://*.kluwerlawonline.com/*
// @match        *://*.kluweronline.com/*
// @match        *://*.knovel.com/*
// @match        *://*.la.rsm.com/*
// @match        *://*.labanimal.com/*
// @match        *://*.landesbioscience.com/*
// @match        *://*.lexisnexis.com/*
// @match        *://*.lexis-nexis.com/*
// @match        *://*.libraryissues.com/*
// @match        *://*.liebertonline.com/*
// @match        *://*.livestockscience.com/*
// @match        *://*.mapress.com/*
// @match        *://*.marquiswhoswho.com/*
// @match        *://*.math.ca/*
// @match        *://*.mcgill.ca/*
// @match        *://*.mdpi.com/*
// @match        *://*.metapress.com/*
// @match        *://*.metla.fi/*
// @match        *://*.micronexx.com/*
// @match        *://*.millerpublishing.com/*
// @match        *://*.mintel.com/*
// @match        *://*.mluri.sari.ac.uk/*
// @match        *://*.modernmedicine.com/*
// @match        *://*.mp.bmj.com/*
// @match        *://*.mp.weixin.qq.com/*
// @match        *://*.mr-gut.cn/*
// @match        *://*.msucares.com/*
// @match        *://*.national.com/*
// @match        *://*.ncbi.nlm.nih.gov/*
// @match        *://*.ncsu.naxosmusic.com/*
// @match        *://*.news.reseau-concept.net/*
// @match        *://*.newsbank.com/*
// @match        *://*.nlm.nih.gov/*
// @match        *://*.nonlin-processes-geophys.net/*
// @match        *://*.npprj.spci.se/*
// @match        *://*.nrcresearchpress.com/*
// @match        *://*.nv-med.com/*
// @match        *://*.nybooks.com/*
// @match        *://*.odyssi.com/*
// @match        *://*.oed.com/*
// @match        *://*.oldcitypublishing.com/*
// @match        *://*.onlinewiley.com/*
// @match        *://*.org/*
// @match        *://*.oup.com/*
// @match        *://*.ooopn.com/*
// @match        *://*.sssam.com/*
// @match        *://*.ovidsp.ovid.com/*
// @match        *://*.oxfordlanguagedictionaries.com/*
// @match        *://*.oxfordmusiconline.com/*
// @match        *://*.pagekoreascience.or.kr/*
// @match        *://*.palgrave.com/*
// @match        *://*.paperpile.com/*
// @match        *://*.pasj.asj.or.jp/*
// @match        *://*.peanutscience.com/*
// @match        *://*.peerj.com/*
// @match        *://*.pepublishing.com/*
// @match        *://*.perceptionweb.com/*
// @match        *://*.pharmacists.ca/*
// @match        *://*.podiatrytoday.com/*
// @match        *://*.polymersdatabase.com/*
// @match        *://*.portal.euromonitor.com/*
// @match        *://*.pracademics.com/*
// @match        *://*.pressdisplay.com/*
// @match        *://*.priory.com/*
// @match        *://*.proquest.com/*
// @match        *://*.proquest.umi.com/*
// @match        *://*.publish.csiro.au/*
// @match        *://*.pubmed.cn/*
// @match        *://*.pubmed.com/*
// @match        *://*.pubmedcentral.nih.gov/*
// @match        *://*.pubmedcentralcanada.ca/*
// @match        *://*.pubservices.nrc-cnrc.ca/*
// @match        *://*.purl.access.gpo.gov/*
// @match        *://*.qjps.com/*
// @match        *://*.railwayage.com/*
// @match        *://*.rdsinc.com/*
// @match        *://*.readpaper.com/*
// @match        *://*.redbooks.com/*
// @match        *://*.reference-global.com/*
// @match        *://*.referenceusa.com/*
// @match        *://*.researcherslinks.com/*
// @match        *://*.researchgate.net/*
// @match        *://*.revophth.com/*
// @match        *://*.riag.com/*
// @match        *://*.rsm.com/*
// @match        *://*.safaribooksonline.com/*
// @match        *://*.sagamorepub.com/*
// @match        *://*.sagepub.com/*
// @match        *://*.sanborn.umi.com/*
// @match        *://*.sbrnet.com/*
// @match        *://*.schattauer.de/*
// @match        *://*.scientific.net/*
// @match        *://*.scitation.org/*
// @match        *://*.simplymap.com/*
// @match        *://*.scimagojr.com/*
// @match        *://*.scilit.net/*
// @match        *://*.scopus.com/*
// @match        *://*.site.ebrary.com/*
// @match        *://*.springer.com/*
// @match        *://*.springer.de/*
// @match        *://*.springer-ny.com/*
// @match        *://*.springerprotocols.com/*
// @match        *://*.standardandpoors.com/*
// @match        *://*.statpak.gov.pk/*
// @match        *://*.swissmedic.ch/*
// @match        *://*.technologyreview.com/*
// @match        *://*.telospress.com/*
// @match        *://*.theannals.com/*
// @match        *://*.thecochrane.com/*
// @match        *://*.thelancet.com/*
// @match        *://*.theses.com/*
// @match        *://*.ualberta.ca/*
// @match        *://*.ulrichsweb.com/*
// @match        *://*.unb.ca/*
// @match        *://*.unesp.br/*
// @match        *://*.uni.wroc.pl/*
// @match        *://*.victoriandatabase.com/*
// @match        *://*.victorianperiodicals.com/*
// @match        *://*.wanfangdata.com.cn/*
// @match        *://*.webofknowledge.com/*
// @match        *://*.webofscience.com/*
// @match        *://*.wgsn.com/*
// @match        *://*.wkap.nl/*
// @match        *://*.worldscientific.com/*
// @match        *://*.worldscinet.com/*
// @match        *://*.worldscinetarchives.com/*
// @match        *://*.wssa.allenpress.com/*
// @match        *://*.x-mol.com/*
// @match        *://*.ybook.co.jp/*
// @match        *://*.zhihu.com/*
// @match        *://*.znaturforsch.com/*
// @match        *://*/doi/*
// @match        *://*.mksa.top/*
// @match        *://*.hkvisa.net/*
// @match        *://*.3800808.com/*
// @match        *://sci-hub.ee/*
// @match        *://sci-hub.se/*
// @match        *://sci-hub.st/*
// @match        *://sci-hub.ru/*
// @match        *://sci-hub.wf/*
// @match        *://sci-hub.ren/*
// @match        *://sci-hub.cat/*
// @match        *://1lib.ink/*
// @match        *://1lib.ren/*
// @match        *://zlib.ink/*
// @match        *://zlib.ren/*
// @match        *://zlib.lol/*
// @match        *://1lib.tk/*
// @match        *://zmirror.tk/*
// @match        *://zlibrary.pw/*
// @match        *://zlibrary.page/*
// @match        *://zlibrary.gay/*
// @match        *://*.comdot.xyz/*
// @match        *://*.dotcomdot.xyz/*
// @exclude      *://pos.baidu.com/*
// @exclude      *://www.google.com/*
// @icon         data:image/png;base64,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
// ==/UserScript==

(() => {
    'use strict';
    var link, random, scihub_link, libgen_link, Target, tgoing, jdata = {}, pdata = {}, sdata = {}, odata = {}, tdata = {}, kdata = {}, initOption = {}, result = {}, $ = jQuery, doc = $(document), myHost = window.location.hostname, docAsStr = document.documentElement.innerHTML, site = document.URL.toString();
    var ccfdata = '{"acmsigplansymposiumonprinciplespracticeofparallelprogramming":"A","sigplansymposiumprinciplespracticeparallelprogramming":"A","sspppp":"A","conferenceonfileandstoragetechnologies":"A","filestagetechnologies":"A","fst":"A","designautomationconference":"A","designautomati":"A","da":"A","highperformancecomputerarchitecture":"A","highperfmancecomputerarchitecture":"A","hpca":"A","ieeeacminternationalsymposiumonmicroarchitecture":"A","symposiummicroarchitecture":"A","sm":"A","internationalconferenceforhighperformancecomputingnetworkingstorageandanalysis":"A","fhighperfmancecomputingnetwkingstageanalysis":"A","fhpcnsa":"A","internationalconferenceonarchitecturalsupportforprogramminglanguagesandoperatingsystems":"A","architecturalsupptfprogramminglanguagesoperatingsystems":"A","asfplos":"A","internationalsymposiumoncomputerarchitecture":"A","symposiumcomputerarchitecture":"A","sca":"A","usenixannultechnicalconference":"A","usenixannultechnical":"A","uat":"A","acmsymposiumoncloudcomputing":"B","symposiumcloudcomputing":"B","scc":"B","acmsymposiumonparallelisminalgorithmsandarchitectures":"B","symposiumparallelisminalgithmsarchitectures":"B","spiaa":"B","acmsymposiumonprinciplesofdistributedcomputing":"B","symposiumprinciplesdistributedcomputing":"B","spdc":"B","acmsigdainternationalsymposiumonfieldprogrammablegatearrays":"B","sigdasymposiumfieldprogrammablegatearrays":"B","ssfga":"B","codegenerationandoptimization":"B","codegeneratioptimizati":"B","cgo":"B","designautomationtestineurope":"B","designautomatitestineurope":"B","datie":"B","europeanconferenceoncomputersystems":"B","europeancomputersystems":"B","ecs":"B","hotchipsasymposiumonhighperformancechips":"B","hotchipsasymposiumhighperfmancechips":"B","hcashpc":"B","ieeeinternationalconferenceonclustercomputing":"B","clustercomputing":"B","cc":"A","internationalconferenceoncomputerdesign":"B","computerdesign":"B","cd":"B","internationalconferenceoncomputeraideddesign":"B","computeraideddesign":"B","internationalconferenceondistributedcomputingsystems":"B","distributedcomputingsystems":"B","dcs":"B","internationalconferenceonhardwaresoftwarecodesignandsystemsynthesis":"B","hardwarestwarecodesignsystemsynsis":"B","hcss":"B","internationalconferenceonhighperformanceandembeddedarchitecturesandcompilers":"B","highperfmanceembeddedarchitecturescompilers":"B","hpeac":"B","internationalconferenceonmeasurementandmodelingofcomputersystems":"B","measurementmodelingcomputersystems":"B","mmcs":"B","internationalconferenceonparallelarchitecturesandcompilationtechniques":"B","parallelarchitecturescompilatitechniques":"B","pact":"B","internationalconferenceonparallelprocessing":"B","parallelprocessing":"B","pp":"B","internationalconferenceonsupercomputing":"B","supercomputing":"B","s":"B","internationalconferenceonvirtualexecutionenvironments":"B","virtualexecutienvirments":"B","vee":"B","internationalparalleldistributedprocessingsymposium":"B","paralleldistributedprocessingsymposium":"B","pdps":"B","internationalsymposiumoncomputerperformancemodelingmeasurementsandevaluation":"B","symposiumcomputerperfmancemodelingmeasurementsevaluati":"B","scpmme":"B","internationalsymposiumonhighperformancedistributedcomputing":"B","symposiumhighperfmancedistributedcomputing":"B","shpdc":"B","internationaltestconference":"B","test":"B","t":"B","largeinstallationsystemadministrationconference":"B","largeinstallatisystemadministrati":"B","lisa":"B","massstoragesystemsandtechnologies":"B","massstagesystemstechnologies":"B","msst":"B","realtimeandembeddedtechnologyandapplicationssymposium":"B","realtimeembeddedtechnologyapplicatissymposium":"B","retas":"B","acminternationalconferenceoncomputingfrontiers":"C","computingfrtiers":"C","cf":"C","acminternationalsystemsandstorageconference":"C","systemsstage":"C","ss":"C","acmieeeinternationalsymposiumonnetworksonchip":"C","symposiumnetwkschip":"C","sn":"C","applicationspecificsystemsarchitecturesandprocessors":"C","applicatispecificsystemsarchitecturesprocesss":"C","asap":"C","asiaandsouthpacificdesignautomationconference":"C","asiasouthpacificdesignautomati":"C","aspda":"C","europeanconferenceonparallelanddistributedcomputing":"C","europeanparalleldistributedcomputing":"C","epdc":"C","europeantestsymposium":"C","ets":"C","fieldprogrammablelogicandapplications":"C","fieldprogrammablelogicapplicatis":"C","fpla":"C","fieldprogrammablecustomcomputingmachines":"C","fccm":"C","greatlakessymposiumonvlsi":"C","greatlakessymposiumvlsi":"C","glsv":"C","ieeeasiantestsymposium":"C","asiantestsymposium":"C","ats":"C","ieeeinternationalconferenceonhighperformancecomputingandcommunications":"C","highperfmancecomputingcommunicatis":"C","hpcc":"C","ieeeinternationalconferenceonhighperformancecomputingdataandanalytics":"C","highperfmancecomputingdataanalytics":"C","hpcda":"C","ieeeinternationalsymposiumonmodelinganalysisandsimulationofcomputerandtelecommunicationsystems":"C","symposiummodelinganalysissimulaticomputertelecommunicatisystems":"C","smascts":"C","ieeeinternationalsymposiumonparallelanddistributedprocessingwithapplications":"C","symposiumparalleldistributedprocessingwithapplicatis":"C","spdpwa":"C","ieeeacminternationalsymposiumonclustercloudandgridcomputing":"C","symposiumclustercloudgridcomputing":"C","sccgc":"C","ifipinternationalconferenceonnetworkandparallelcomputing":"C","ifipnetwkparallelcomputing":"C","inpc":"C","internationalconferenceonalgorithmsandarchitecturesforparallelprocessing":"C","algithmsarchitecturesfparallelprocessing":"C","aafpp":"C","internationalconferenceoncompilersarchitecturesandsynthesisforembeddedsystems":"C","compilersarchitecturessynsisfembeddedsystems":"C","casfes":"C","internationalconferenceonfieldprogrammabletechnology":"C","fieldprogrammabletechnology":"C","ft":"C","internationalconferenceonparallelanddistributedsystems":"C","paralleldistributedsystems":"C","pds":"C","internationalsymposiumoncircuitsandsystems":"C","symposiumcircuitssystems":"C","scs":"C","internationalsymposiumonlowpowerelectronicsanddesign":"C","symposiumlowpowerelectricsdesign":"C","slped":"C","internationalsymposiumonphysicaldesign":"C","symposiumphysicaldesign":"C","spd":"C","symposiumonhighperformanceinterconnects":"C","symposiumhighperfmanceintercnects":"C","shi":"C","vlsitestsymposium":"C","vts":"C","acminternationalconferenceonapplicationstechnologiesarchitecturesandprotocolsforcomputercommunication":"A","applicatistechnologiesarchitecturesprotocolsfcomputercommunicati":"A","atapfcc":"A","acminternationalconferenceonmobilecomputingandnetworking":"A","mobilecomputingnetwking":"A","mcn":"A","ieeeinternationalconferenceoncomputercommunications":"A","computercommunicatis":"C","symposiumonnetworksystemdesignandimplementation":"A","symposiumnetwksystemdesignimplementati":"A","snsdi":"A","acmconferenceonembeddednetworkedsensorsystems":"B","embeddednetwkedsenssystems":"B","enss":"B","acminternationalconferenceonemergingnetworkingexperimentsandtechnologies":"B","emergingnetwkingexperimentstechnologies":"B","enet":"B","ieeecommunicationssocietyconferenceonsensorandadhoccommunicationsandnetworks":"B","communicatissocietysensadhoccommunicatisnetwks":"B","cssahcn":"B","internationalconferenceoninformationprocessinginsensornetworks":"B","infmatiprocessinginsensnetwks":"B","ipisn":"B","internationalconferenceonmobilesystemsapplicationsandservices":"B","mobilesystemsapplicatisservices":"B","msas":"B","internationalconferenceonnetworkprotocols":"B","netwkprotocols":"B","np":"B","internationalsymposiumonmobileadhocnetworkingandcomputing":"B","symposiummobileadhocnetwkingcomputing":"B","smahnc":"B","internationalworkshoponnetworkandoperatingsystemsupportfordigitalaudioandvideo":"B","wkshopnetwkoperatingsystemsupptfdigitalaudiovideo":"B","wnossfdav":"B","internationalworkshoponqualityofservice":"B","wkshopqualityservice":"B","wqs":"B","internetmeasurementconference":"B","internetmeasurement":"B","im":"B","architecturesfornetworkingandcommunicationssystems":"C","architecturesfnetwkingcommunicatissystems":"C","afncs":"C","asiapacificnetworkoperationsandmanagementsymposium":"C","asiapacificnetwkoperatismanagementsymposium":"C","anoms":"C","formaltechniquesfornetworkedanddistributedsystems":"C","fmaltechniquesfnetwkeddistributedsystems":"C","ftfnds":"C","ieeeconferenceonlocalcomputernetworks":"C","localcomputernetwks":"C","lcn":"C","ieeeglobalcommunicationsconference":"C","globalcommunicatis":"C","gc":"C","ieeeinternationalconferenceoncommunications":"C","communicatis":"C","c":"A","ieeeinternationalconferenceoncomputercommunicationsandnetworks":"C","computercommunicatisnetwks":"C","ccn":"C","ieeeinternationalconferenceonmobileadhocandsensorsystems":"C","mobileadhocsenssystems":"C","mass":"C","ieeeinternationalconferenceonpeertopeercomputing":"C","peertopeercomputing":"C","pc":"B","ieeeinternationalperformancecomputingandcommunicationsconference":"C","perfmancecomputingcommunicatis":"C","pcc":"B","ieeeinternationalsymposiumonaworldofwirelessmobileandmultimedianetworks":"C","symposiumawldwirelessmobilemultimedianetwks":"C","sawwmmn":"C","ieeesymposiumoncomputersandcommunications":"C","symposiumcomputerscommunicatis":"C","ieeewirelesscommunicationsnetworkingconference":"C","wirelesscommunicatisnetwking":"C","wcn":"C","ifipinternationalconferencesonnetworking":"C","ifipsnetwking":"C","isn":"C","ifipieeeinternationalsymposiumonintegratednetworkmanagement":"C","ifipsymposiumintegratednetwkmanagement":"C","isinm":"C","internationalconferenceonmobileadhocandsensornetworks":"C","mobileadhocsensnetwks":"C","masn":"C","internationalconferenceonmodelinganalysisandsimulationofwirelessandmobilesystems":"C","modelinganalysissimulatiwirelessmobilesystems":"C","maswms":"C","internationalconferenceonwirelessalgorithmssystemsandapplications":"C","wirelessalgithmssystemsapplicatis":"C","wasa":"C","theworkshoponhottopicsinnetworks":"C","wkshophottopicsinnetwks":"C","whtin":"C","acmconferenceoncomputerandcommunicationssecurity":"A","computercommunicatissecurity":"A","ccs":"A","europeancryptologyconference":"A","europeancryptology":"A","ec":"A","ieeesymposiumonsecurityandprivacy":"A","symposiumsecurityprivacy":"A","ssp":"A","internationalcryptologyconference":"A","cryptology":"A","usenixsecuritysymposium":"A","uss":"A","annualcomputersecurityapplicationsconference":"B","annualcomputersecurityapplicatis":"B","acsa":"B","annualinternationalconferenceonthetheoryandapplicationofcryptologyandinformationsecurity":"B","annualyapplicaticryptologyinfmatisecurity":"B","ayacis":"B","europeansymposiumonresearchincomputersecurity":"B","europeansymposiumresearchincomputersecurity":"B","esrics":"B","fastsoftwareencryption":"B","faststwareencrypti":"B","fse":"B","ieeecomputersecurityfoundationsworkshop":"B","computersecurityfoundatiswkshop":"B","csfw":"B","ieeeinternationalsymposiumonreliabledistributedsystems":"B","symposiumreliabledistributedsystems":"B","srds":"B","internationalconferenceoncryptographichardwareandembeddedsystems":"B","cryptographichardwareembeddedsystems":"B","ches":"B","internationalconferenceondependablesystemsandnetworks":"B","dependablesystemsnetwks":"B","dsn":"B","internationalsymposiumonrecentadvancesinintrusiondetection":"B","symposiumrecentadvancesinintrusidetecti":"B","sraiid":"B","internationalworkshoponpracticeandtheoryinpublickeycryptography":"B","wkshoppracticeyinpublickeycryptography":"B","wpyipkc":"B","isocnetworkanddistributedsystemsecuritysymposium":"B","isocnetwkdistributedsystemsecuritysymposium":"B","indsss":"B","theoryofcryptographyconference":"B","ycryptography":"B","yc":"B","acmconferenceonsecurityandprivacyinwirelessandmobilenetworks":"C","securityprivacyinwirelessmobilenetwks":"C","spiwmn":"C","acmsymposiumonaccesscontrolmodelsandtechnologies":"C","symposiumaccessctrolmodelstechnologies":"C","sacmt":"C","acmworkshopondigitalrightsmanagement":"C","wkshopdigitalrightsmanagement":"C","wdrm":"C","acmworkshoponinformationhidingandmultimediasecurity":"C","wkshopinfmatihidingmultimediasecurity":"C","wihms":"C","appliedcryptographyandnetworksecurity":"C","appliedcryptographynetwksecurity":"C","acns":"C","asiaconferenceoncomputerandcommunicationssecurity":"C","asiacomputercommunicatissecurity":"C","accs":"C","australasiaconferenceoninformationsecurityandprivacy":"C","australasiainfmatisecurityprivacy":"C","aisp":"C","cryptographer\u2019strackatrsaconference":"C","cryptographer\u2019strackatrsa":"C","ctar":"C","detectionofintrusionsandmalwarevulnerabilityassessment":"C","detectiintrusismalwarevulnerabilityassessment":"C","dimva":"C","digitalforensicresearchworkshop":"C","digitalfensicresearchwkshop":"C","dfrw":"C","financialcryptographyanddatasecurity":"C","financialcryptographydatasecurity":"C","fcds":"C","ieeeinternationalconferenceontrustsecurityandprivacyincomputingandcommunications":"C","trustsecurityprivacyincomputingcommunicatis":"C","tspicc":"C","ifipinternationalinformationsecurityconference":"C","ifipinfmatisecurity":"C","iis":"C","ifipwg119internationalconferenceondigitalforensics":"C","ifipwg119digitalfensics":"C","iw1df":"C","informationsecurityconference":"C","infmatisecurity":"C","is":"B","internationalconferenceondigitalforensicscybercrime":"C","digitalfensicscybercrime":"C","dfcc":"C","internationalconferenceoninformationandcommunicationssecurity":"C","infmaticommunicatissecurity":"C","ics":"C","internationalconferenceonsecurityandprivacyincommunicationnetworks":"C","securityprivacyincommunicatinetwks":"C","spicn":"C","newsecurityparadigmsworkshop":"C","newsecurityparadigmswkshop":"C","nspw":"C","passiveandactivemeasurementconference":"C","passiveactivemeasurement":"C","pam":"C","privacyenhancingtechnologiessymposium":"C","pets":"C","selectedareasincryptography":"C","saic":"C","symposiumonusableprivacyandsecurity":"C","symposiumusableprivacysecurity":"C","sups":"C","usenixworkshoponhottopicsinsecurity":"C","usenixwkshophottopicsinsecurity":"C","uwhtis":"C","acmsigplanconferenceonprogramminglanguagedesignimplementation":"A","sigplanprogramminglanguagedesignimplementati":"A","spldi":"A","acmsigplansigactsymposiumonprinciplesofprogramminglanguages":"A","sigplansigactsymposiumprinciplesprogramminglanguages":"A","ssppl":"A","acmsigsoftsymposiumonthefoundationofsoftwareengineeringeuropeansoftwareengineeringconference":"A","sigstsymposiumfoundatistwareengineeringeuropeanstwareengineering":"A","ssfseese":"A","acmsymposiumonoperatingsystemsprinciples":"A","symposiumoperatingsystemsprinciples":"A","sosp":"A","conferenceonobjectorientedprogrammingsystemslanguagesandapplications":"A","objectientedprogrammingsystemslanguagesapplicatis":"A","opsla":"A","internationalconferenceonautomatedsoftwareengineering":"A","automatedstwareengineering":"B","ase":"A","internationalconferenceonsoftwareengineering":"A","stwareengineering":"A","se":"A","internationalsymposiumonsoftwaretestingandanalysis":"A","symposiumstwaretestinganalysis":"A","ssta":"A","usenixsymposiumonoperatingsystemsdesignandimplementations":"A","usenixsymposiumoperatingsystemsdesignimplementatis":"A","usosdi":"A","europeanconferenceonobjectorientedprogramming":"B","europeanobjectientedprogramming":"B","eop":"B","europeanjointconferencesontheoryandpracticeofsoftware":"B","europeanjointsypracticestware":"B","ejsyps":"B","ieeeinternationalconferenceonprogramcomprehension":"B","programcomprehensi":"B","ieeeinternationalrequirementengineeringconference":"B","requirementengineering":"B","re":"B","internationalconferenceonadvancedinformationsystemsengineering":"B","advancedinfmatisystemsengineering":"B","aise":"B","internationalconferenceonfunctionprogramming":"B","functiprogramming":"B","fp":"B","internationalconferenceonlanguagescompilersandtoolsforembeddedsystems":"B","languagescompilerstoolsfembeddedsystems":"B","lctfes":"B","internationalconferenceonmodeldrivenengineeringlanguagesandsystems":"B","modeldrivenengineeringlanguagessystems":"B","mdels":"B","internationalconferenceonprinciplesandpracticeofconstraintprogramming":"B","principlespracticecstraintprogramming":"B","ppcp":"B","internationalconferenceonserviceorientedcomputing":"B","serviceientedcomputing":"B","sic":"B","internationalconferenceonsoftwareanalysisevolutionandreengineering":"B","stwareanalysisevolutireengineering":"B","saer":"B","internationalconferenceonsoftwaremaintenanceandevolution":"B","stwaremaintenanceevoluti":"B","sme":"B","internationalconferenceonverificationmodelcheckingandabstractinterpretation":"B","verificatimodelcheckingabstractinterpretati":"B","vmcai":"B","internationalconferenceonwebservicesresearchtrack":"B","webservicesresearchtrack":"B","wsrt":"B","internationalmiddlewareconference":"B","middleware":"B","m":"A","internationalstaticanalysissymposium":"B","staticanalysissymposium":"B","sas":"B","internationalsymposiumonempiricalsoftwareengineeringandmeasurement":"B","symposiumempiricalstwareengineeringmeasurement":"B","sesem":"B","internationalsymposiumonformalmethods":"B","symposiumfmalmethods":"B","sfm":"B","internationalsymposiumonsoftwarereliabilityengineering":"B","symposiumstwarereliabilityengineering":"B","ssre":"B","usenixworkshoponhottopicsinoperatingsystems":"B","usenixwkshophottopicsinoperatingsystems":"B","uwhtios":"B","acmsigplanworkshoponpartialevaluationandprogrammanipulation":"C","sigplanwkshoppartialevaluatiprogrammanipulati":"C","swpepm":"C","acmsigplansigsoftworkshoponprogramanalysisforsoftwaretoolsandengineering":"C","sigplansigstwkshopprogramanalysisfstwaretoolsengineering":"C","swpafste":"C","asiansymposiumonprogramminglanguagesandsystems":"C","asiansymposiumprogramminglanguagessystems":"C","aspls":"C","asiapacificsoftwareengineeringconference":"C","asiapacificstwareengineering":"C","evaluationandassessmentinsoftwareengineering":"C","evaluatiassessmentinstwareengineering":"C","eaise":"C","ieeeinternationalconferenceonengineeringofcomplexcomputersystems":"C","engineeringcomplexcomputersystems":"C","eccs":"C","ieeeinternationalconferenceonsoftwaretestingverificationandvalidation":"C","stwaretestingverificativalidati":"C","stvv":"C","ieeeinternationalsymposiumonperformanceanalysisofsystemsandsoftware":"C","symposiumperfmanceanalysissystemsstware":"C","spass":"C","ieeeinternationalworkingconferenceonsourcecodeanalysisandmanipulation":"C","wkingsourcecodeanalysismanipulati":"C","wscam":"C","internationalcomputersoftwareandapplicationsconference":"C","computerstwareapplicatis":"C","csa":"C","internationalconferenceonformalengineeringmethods":"C","fmalengineeringmethods":"C","fem":"C","internationalconferenceonobjectsmodelscomponentspatterns":"C","objectsmodelscompentspatterns":"C","omcp":"C","internationalconferenceonqualitysoftware":"C","qualitystware":"C","qs":"C","internationalconferenceonservicecomputing":"C","servicecomputing":"C","sc":"B","internationalconferenceonsoftwareandsystemprocess":"C","stwaresystemprocess":"C","internationalconferenceonsoftwareengineeringandknowledgeengineering":"C","stwareengineeringknowledgeengineering":"C","seke":"C","internationalconferenceonsoftwarereuse":"C","stwarereuse":"C","sr":"C","internationalconferenceonwebengineering":"C","webengineering":"C","we":"C","internationalspinworkshoponmodelcheckingsoftware":"C","spinwkshopmodelcheckingstware":"C","swmcs":"C","internationalsymposiumonautomatedtechnologyforverificationandanalysis":"C","symposiumautomatedtechnologyfverificatianalysis":"C","satfva":"C","internationalsymposiumonlogicbasedprogramsynthesisandtransformation":"C","symposiumlogicbasedprogramsynsistransfmati":"C","slpst":"C","internationalsymposiumontheoreticalaspectsofsoftwareengineering":"C","symposiumeticalaspectsstwareengineering":"C","sease":"C","miningsoftwarerepositories":"C","miningstwarereposities":"C","msr":"C","requirementsengineeringfoundationforsoftwarequality":"C","requirementsengineeringfoundatifstwarequality":"C","reffsq":"C","workingieeeifipconferenceonsoftwarearchitecture":"C","wkingifipstwarearchitecture":"C","wisa":"C","acmconferenceonmanagementofdata":"A","managementdata":"A","md":"A","acmknowledgediscoveryanddatamining":"A","knowledgediscoverydatamining":"A","kddm":"A","ieeeinternationalconferenceondataengineering":"A","dataengineering":"A","de":"A","internationalconferenceonresearchondevelopmentininformationretrieval":"A","researchdevelopmentininfmatiretrieval":"A","rdiir":"A","internationalconferenceonverylargedatabases":"A","verylargedatabases":"A","vldb":"A","acminternationalconferenceoninformationandknowledgemanagement":"B","infmatiknowledgemanagement":"B","ikm":"B","acminternationalconferenceonwebsearchanddatamining":"B","websearchdatamining":"B","wsdm":"B","acmsymposiumonprinciplesofdatabasesystems":"B","symposiumprinciplesdatabasesystems":"B","spds":"B","databasesystemsforadvancedapplications":"B","databasesystemsfadvancedapplicatis":"B","dsfaa":"B","europeanconferenceonmachinelearningandprinciplesandpracticeofknowledgediscoveryindatabases":"B","europeanmachinelearningprinciplespracticeknowledgediscoveryindatabases":"B","emlppkdid":"B","ieeeinternationalsemanticwebconference":"B","semanticweb":"B","sw":"B","internationalconferenceondatamining":"B","datamining":"B","dm":"B","internationalconferenceondatabasetheory":"B","databasey":"B","dy":"B","internationalconferenceonextendingdbtechnology":"B","extendingdbtechnology":"B","edt":"B","internationalconferenceoninnovativedatasystemsresearch":"B","innovativedatasystemsresearch":"B","idsr":"B","siaminternationalconferenceondatamining":"B","siamdatamining":"B","sdm":"B","asiapacificwebconference":"C","asiapacificweb":"C","apw":"C","databaseandexpertsystemapplications":"C","databaseexpertsystemapplicatis":"C","desa":"C","europeanconferenceonirresearch":"C","europeanirresearch":"C","eir":"C","extendedsemanticwebconference":"C","extendedsemanticweb":"C","esw":"C","internationalacmworkshoponwebanddatabases":"C","wkshopwebdatabases":"C","wwd":"C","internationalconferenceonconceptualmodeling":"C","cceptualmodeling":"C","cm":"C","internationalconferenceonmobiledatamanagement":"C","mobiledatamanagement":"C","mdm":"C","internationalconferenceonscientificandstatisticaldbmanagement":"C","scientificstatisticaldbmanagement":"C","ssdm":"C","internationalconferenceonwebageinformationmanagement":"C","webageinfmatimanagement":"C","waim":"C","internationalsymposiumonspatialandtemporaldatabases":"C","symposiumspatialtempaldatabases":"C","sstd":"C","pacificasiaconferenceonknowledgediscoveryanddatamining":"C","pacificasiaknowledgediscoverydatamining":"C","pkddm":"C","webinformationsystemsengineering":"C","webinfmatisystemsengineering":"C","wise":"C","acmsymposiumonthetheoryofcomputing":"A","symposiumycomputing":"A","syc":"A","acmsiamsymposiumondiscretealgorithms":"A","siamsymposiumdiscretealgithms":"A","ssda":"A","computeraidedverification":"A","computeraidedverificati":"A","cav":"A","ieeeannualsymposiumonfoundationsofcomputerscience":"A","annualsymposiumfoundatiscomputerscience":"A","asfcs":"A","ieeesymposiumonlogicincomputerscience":"A","symposiumlogicincomputerscience":"A","slics":"A","acmsymposiumoncomputationalgeometry":"B","symposiumcomputatialgeometry":"B","scg":"B","europeansymposiumonalgorithms":"B","europeansymposiumalgithms":"B","esa":"B","ieeeconferenceoncomputationalcomplexity":"B","computatialcomplexity":"B","internationalcolloquiumonautomatalanguagesandprogramming":"B","colloquiumautomatalanguagesprogramming":"B","calp":"B","internationalconferenceonautomateddeductioninternationaljointconferenceonautomatedreasoning":"B","automateddeductijointautomatedreasing":"B","adjar":"B","internationalconferenceonconcurrencytheory":"B","ccurrencyy":"B","cy":"B","internationalconferenceonhybridsystemscomputationandcontrol":"B","hybridsystemscomputatictrol":"B","hscc":"B","theoryandapplicationsofsatisfiabilitytesting":"B","yapplicatissatisfiabilitytesting":"B","yast":"B","computersciencelogic":"C","csl":"C","formalmethodsincomputeraideddesign":"C","fmalmethodsincomputeraideddesign":"C","fmicd":"C","foundationsofsoftwaretechnologyandtheoreticalcomputerscience":"C","foundatisstwaretechnologyeticalcomputerscience":"C","fstecs":"C","ieeeinternationalconferenceondatascienceandadvancedanalytics":"C","datascienceadvancedanalytics":"C","dsaa":"C","internationalcolloquiumontheoreticalaspectsofcomputing":"C","colloquiumeticalaspectscomputing":"C","ceac":"C","internationalconferenceonintegerprogrammingandcombinatorialoptimization":"C","integerprogrammingcombinatialoptimizati":"C","ipco":"C","internationalconferenceonrewritingtechniquesandapplications":"C","rewritingtechniquesapplicatis":"C","rta":"C","internationalsymposiumonalgorithmsandcomputation":"C","symposiumalgithmscomputati":"C","sac":"C","mathematicalfoundationsofcomputerscience":"C","mamaticalfoundatiscomputerscience":"C","mfcs":"C","symposiumontheoreticalaspectsofcomputerscience":"C","symposiumeticalaspectscomputerscience":"C","seacs":"C","acminternationalconferenceonmultimedia":"A","multimedia":"A","acmsiggraphannualconference":"A","siggraphannual":"A","sa":"A","ieeevirtualreality":"A","virtualreality":"A","vr":"A","ieeevisualizationconference":"A","visualizati":"A","v":"A","acmsigmminternationalconferenceonmultimediaretrieval":"B","sigmmmultimediaretrieval":"B","smr":"B","acmsymposiumoninteractive3dgraphics":"B","symposiuminteractive3dgraphics":"B","si3g":"B","acmeurographicssymposiumoncomputeranimation":"B","eurographicssymposiumcomputeranimati":"B","esca":"B","datacompressionconference":"B","datacompressi":"B","dc":"B","eurographics":"B","e":"B","eurographicsconferenceonvisualization":"B","eurographicsvisualizati":"B","ev":"B","eurographicssymposiumongeometryprocessing":"B","eurographicssymposiumgeometryprocessing":"B","esgp":"B","eurographicssymposiumonrendering":"B","eurographicssymposiumrendering":"B","esr":"B","ieeeinternationalconferenceonacousticsspeechandsp":"B","acousticsspeechsp":"B","ass":"B","ieeeinternationalconferenceonmultimediaexpo":"B","multimediaexpo":"B","me":"B","internationalsymposiumonmixedandaugmentedreality":"B","symposiummixedaugmentedreality":"B","smar":"B","pacificgraphicsthepacificconferenceoncomputergraphicsandapplications":"B","pacificgraphicspacificcomputergraphicsapplicatis":"B","pgpcga":"B","symposiumonsolidandphysicalmodeling":"B","symposiumsolidphysicalmodeling":"B","sspm":"B","acmsymposiumonvirtualrealitysoftwareandtechnology":"C","symposiumvirtualrealitystwaretechnology":"C","svrst":"C","computeranimationandsocialagents":"C","computeranimatisocialagents":"C","casa":"C","computergraphicsinternational":"C","computergraphics":"C","cg":"C","conferenceoftheinternationalspeechcommunicationassociation":"C","speechcommunicatiassociati":"C","geometricmodelingandprocessing":"C","geometricmodelingprocessing":"C","gmp":"C","ieeepacificvisualizationsymposium":"C","pacificvisualizatisymposium":"C","pvs":"C","internationalconferenceon3dvision":"C","3dvisi":"C","3v":"C","internationalconferenceoncomputeraideddesignandcomputergraphics":"C","computeraideddesigncomputergraphics":"C","cdcg":"C","internationalconferenceonimageprocessing":"C","imageprocessing":"C","ip":"C","internationalconferenceonmultimediamodeling":"C","multimediamodeling":"C","mm":"C","pacificrimconferenceonmultimedia":"C","pacificrimmultimedia":"C","pm":"C","shapemodelinginternational":"C","shapemodeling":"C","aaaiconferenceonartificialintelligence":"A","aaaiartificialintelligence":"A","aai":"A","annualconferenceonneuralinformationprocessingsystems":"A","annualneuralinfmatiprocessingsystems":"A","anips":"A","annualmeetingoftheassociationforcomputationallinguistics":"A","annualmeetingassociatifcomputatiallinguistics":"A","amafcl":"A","ieeeconferenceoncomputervisionandpatternrecognition":"A","computervisipatternrecogniti":"A","cvpr":"A","internationalconferenceoncomputervision":"A","computervisi":"A","cv":"A","internationalconferenceonmachinelearning":"A","machinelearning":"B","ml":"A","internationaljointconferenceonartificialintelligence":"A","jointartificialintelligence":"A","jai":"A","annualconferenceoncomputationallearningtheory":"B","annualcomputatiallearningy":"B","acly":"B","conferenceonempiricalmethodsinnaturallanguageprocessing":"B","empiricalmethodsinnaturallanguageprocessing":"B","eminlp":"B","europeanconferenceonartificialintelligence":"B","europeanartificialintelligence":"B","eai":"B","europeanconferenceoncomputervision":"B","europeancomputervisi":"B","ecv":"B","ieeeinternationalconferenceonroboticsandautomation":"B","roboticsautomati":"B","ra":"B","internationalconferenceonautomatedplanningandscheduling":"B","automatedplanningscheduling":"B","aps":"B","internationalconferenceoncasebasedreasoninganddevelopment":"B","casebasedreasingdevelopment":"B","crd":"B","internationalconferenceoncomputationallinguistics":"B","computatiallinguistics":"B","cl":"B","internationalconferenceonprinciplesofknowledgerepresentationandreasoning":"B","principlesknowledgerepresentatireasing":"B","pkrr":"B","internationalconferenceonuncertaintyinartificialintelligence":"B","uncertaintyinartificialintelligence":"B","uiai":"B","internationaljointconferenceonautonomousagentsandmultiagentsystems":"B","jointautomousagentsmultiagentsystems":"B","jaams":"B","parallelproblemsolvingfromnature":"B","ppsfn":"B","artificialintelligenceandstatistics":"C","artificialintelligencestatistics":"C","ais":"C","asianconferenceoncomputervision":"C","asiancomputervisi":"C","acv":"C","asianconferenceonmachinelearning":"C","asianmachinelearning":"C","aml":"C","britishmachinevisionconference":"C","britishmachinevisi":"C","bmv":"C","confinternationalconferenceonnaturallanguageprocessingandchinesecomputing":"C","cfnaturallanguageprocessingchinesecomputing":"C","cnlpcc":"C","conferenceoncomputationalnaturallanguagelearning":"C","computatialnaturallanguagelearning":"C","cnll":"C","geneticandevolutionarycomputationconference":"C","geneticevolutiarycomputati":"C","gec":"C","ieeeinternationalconferenceontoolswithartificialintelligence":"C","toolswithartificialintelligence":"C","twai":"C","ieeersjinternationalconferenceonintelligentrobotsandsystems":"C","rsjintelligentrobotssystems":"C","rirs":"C","internationalconferenceonalgorithmiclearningtheory":"C","algithmiclearningy":"C","aly":"C","internationalconferenceonartificialneuralnetworks":"C","artificialneuralnetwks":"C","ann":"C","internationalconferenceonautomaticfaceandgesturerecognition":"C","automaticfacegesturerecogniti":"C","afgr":"C","internationalconferenceondocumentanalysisandrecognition":"C","documentanalysisrecogniti":"C","dar":"C","internationalconferenceoninductivelogicprogramming":"C","inductivelogicprogramming":"C","ilp":"C","internationalconferenceonknowledgescienceengineeringandmanagement":"C","knowledgescienceengineeringmanagement":"C","ksem":"C","internationalconferenceonneuralinformationprocessing":"C","neuralinfmatiprocessing":"C","nip":"C","internationalconferenceonpatternrecognition":"C","patternrecogniti":"B","pr":"B","internationaljointconferenceonbiometrics":"C","jointbiometrics":"C","jb":"C","internationaljointconferenceonneuralnetworks":"C","jointneuralnetwks":"C","jnn":"C","pacificriminternationalconferenceonartificialintelligence":"C","pacificrimartificialintelligence":"C","prai":"C","theannualconferenceofthenorthamericanchapteroftheassociationforcomputationallinguistics":"C","annualnthamericanchapterassociatifcomputatiallinguistics":"C","anacafcl":"C","acmconferenceoncomputersupportedcooperativeworkandsocialcomputing":"A","computersupptedcooperativewksocialcomputing":"A","cscwsc":"A","acmconferenceonhumanfactorsincomputingsystems":"A","humanfactsincomputingsystems":"A","hfics":"A","acminternationalconferenceonubiquitouscomputing":"A","ubiquitouscomputing":"A","uc":"A","acmconferenceonsupportinggroupwork":"B","supptinggroupwk":"B","sgw":"B","acminternationalconferenceonintelligentuserinterfaces":"B","intelligentuserinterfaces":"B","iui":"B","acminternationalconferenceoninteractivetabletopsandsurfaces":"B","interactivetabletopssurfaces":"B","its":"B","acmsymposiumonuserinterfacesoftwareandtechnology":"B","symposiumuserinterfacestwaretechnology":"B","suist":"B","europeanconferenceoncomputersupportedcooperativework":"B","europeancomputersupptedcooperativewk":"B","ecscw":"B","ieeeinternationalconferenceonpervasivecomputingandcommunications":"B","pervasivecomputingcommunicatis":"B","internationalconferenceonhumancomputerinteractionwithmobiledevicesandservices":"B","humancomputerinteractiwithmobiledevicesservices":"B","hciwmds":"B","acmconferenceondesigninginteractivesystems":"C","designinginteractivesystems":"C","dis":"C","acminternationalconferenceonmultimodalinteraction":"C","multimodalinteracti":"C","mi":"C","acmsigaccessconferenceoncomputersandaccessibility":"C","sigaccesscomputersaccessibility":"C","graphicsinterfaceconference":"C","graphicsinterface":"C","gi":"C","ieeeinternationalconferenceonubiquitousintelligenceandcomputing":"C","ubiquitousintelligencecomputing":"C","uic":"C","ieeeworldhapticsconference":"C","wldhaptics":"C","wh":"C","ifiptc13conferenceonhumancomputerinteraction":"C","ifiptc13humancomputerinteracti":"C","ithi":"C","interactiondesignandchildren":"C","interactidesignchildren":"C","idc":"C","internationalconferenceoncollaborativecomputingnetworkingapplicationsandworksharing":"C","collabativecomputingnetwkingapplicatiswksharing":"C","ccnaw":"C","internationalconferenceoncomputersupportedcooperativeworkindesign":"C","computersupptedcooperativewkindesign":"C","cscwid":"C","internationalconferenceoncooperativeinformationsystems":"C","cooperativeinfmatisystems":"C","cis":"C","internationalconferenceonmobileandubiquitoussystemscomputingnetworkingandservices":"C","mobileubiquitoussystemscomputingnetwkingservices":"C","muscns":"C","internationalworkingconferenceonadvancedvisualinterfaces":"C","wkingadvancedvisualinterfaces":"C","wavi":"C","internationalworldwidewebconferences":"A","wldwidewebs":"A","wwws":"A","realtimesystemssymposium":"A","rss":"A","cognitivesciencesocietyannualconference":"B","cognitivesciencesocietyannual":"B","cssa":"B","ieeeinternationalconferenceonbioinformaticsandbiomedicine":"B","bioinfmaticsbiomedicine":"B","bb":"B","internationalconferenceonembeddedsoftware":"B","embeddedstware":"B","es":"B","internationalconferenceonintelligentsystemsformolecularbiology":"B","intelligentsystemsfmolecularbiology":"B","isfmb":"B","internationalconferenceonresearchincomputationalmolecularbiology":"B","researchincomputatialmolecularbiology":"B","ricmb":"B","americanmedicalinformaticsassociationannualsymposium":"C","americanmedicalinfmaticsassociatiannualsymposium":"C","amiaas":"C","asiapacificbioinformaticsconference":"C","asiapacificbioinfmatics":"C","apb":"C","ieeeinternationalconferenceonbigdata":"C","bigdata":"C","bd":"C","ieeeinternationalconferenceoncloudcomputing":"C","cloudcomputing":"C","ieeeinternationalconferenceonsystemsmanandcybernetics":"C","systemsmancybernetics":"C","smc":"C","internationalconferenceonspatialinformationtheory":"C","spatialinfmatiy":"C","siy":"C","internationalsymposiumonbioinformaticsresearchandapplications":"C","symposiumbioinfmaticsresearchapplicatis":"C","sbra":"C","acmtransactionsoncomputersystems":"A","transactiscomputersystems":"A","tcs":"A","acmtransactionsonstorage":"A","transactisstage":"A","ts":"A","ieeetransactionsoncomputeraideddesignofintegratedcircuitsandsystem":"A","transactiscomputeraideddesignintegratedcircuitssystem":"A","tcdics":"A","ieeetransactionsoncomputers":"A","transactiscomputers":"A","tc":"A","ieeetransactionsonparallelanddistributedsystems":"A","transactisparalleldistributedsystems":"A","tpds":"A","acmtransactionsonarchitectureandcodeoptimization":"B","transactisarchitecturecodeoptimizati":"B","taco":"B","acmtransactionsonautonomousandadaptivesystems":"B","transactisautomousadaptivesystems":"B","taas":"B","acmtransactionsondesignautomationofelectronicsystems":"B","transactisdesignautomatielectricsystems":"B","tdaes":"B","acmtransactionsonembeddedcomputingsystems":"B","transactisembeddedcomputingsystems":"B","tecs":"B","acmtransactionsonreconfigurabletechnologyandsystems":"B","transactisrecfigurabletechnologysystems":"B","trts":"B","ieeetransactionsonverylargescaleintegrationvlsisystems":"B","transactisverylargescaleintegrativlsisystems":"B","tvlsivs":"B","journalofparallelanddistributedcomputing":"B","journalparalleldistributedcomputing":"B","jpdc":"B","journalofsystemsarchitectureembeddedsoftwaredesign":"B","journalsystemsarchitectureembeddedstwaredesign":"B","jsaesd":"B","parallelcomputing":"B","performanceevaluationaninternationaljournal":"B","perfmanceevaluatianjournal":"B","peaj":"B","acmjournalonemergingtechnologiesincomputingsystems":"C","journalemergingtechnologiesincomputingsystems":"C","jetics":"C","concurrencyandcomputationpracticeandexperience":"C","ccurrencycomputatipracticeexperience":"C","ccpe":"C","distributedcomputing":"C","futuregenerationcomputersystems":"C","futuregeneraticomputersystems":"C","fgcs":"C","ieeetransactionsoncloudcomputing":"C","transactiscloudcomputing":"C","tcc":"C","integrationthevlsijournal":"C","integrativlsijournal":"C","ivj":"C","journalofelectronictestingtheoryandapplications":"C","journalelectrictestingyapplicatis":"C","jeta":"C","journalofgridcomputing":"C","journalgridcomputing":"C","jgc":"C","microprocessorsandmicrosystemsembeddedhardwaredesign":"C","microprocesssmicrosystemsembeddedhardwaredesign":"C","mmehd":"C","realtimesystems":"C","rs":"C","thejournalofsupercomputing":"C","journalsupercomputing":"C","js":"C","ieeejournalofselectedareasincommunications":"A","journalselectedareasincommunicatis":"A","jsaic":"A","ieeetransactionsonmobilecomputing":"A","transactismobilecomputing":"A","tmc":"A","ieeeacmtransactionsonnetworking":"A","transactisnetwking":"A","tn":"A","acmtransactionsoninternettechnology":"B","transactisinternettechnology":"B","tit":"B","acmtransactionsonmultimediacomputingcommunicationsandapplications":"B","transactismultimediacomputingcommunicatisapplicatis":"B","tmcca":"B","acmtransactionsonsensornetworks":"B","transactissensnetwks":"B","tsn":"B","computernetworks":"B","computernetwks":"B","cn":"B","ieeetransactionsoncommunications":"B","transactiscommunicatis":"B","ieeetransactionsonwirelesscommunications":"B","transactiswirelesscommunicatis":"B","twc":"B","adhocnetworks":"C","adhocnetwks":"C","ahn":"C","computercommunications":"C","ieeetransactionsonnetworkandservicemanagement":"C","transactisnetwkservicemanagement":"C","tnsm":"C","ietcommunications":"C","ietcommunicatis":"C","ic":"A","journalofnetworkandcomputerapplications":"C","journalnetwkcomputerapplicatis":"C","jnca":"C","mobilenetworksapplications":"C","mobilenetwksapplicatis":"C","mna":"C","networks":"C","netwks":"C","n":"C","peertopeernetworkingandapplications":"C","peertopeernetwkingapplicatis":"C","pna":"C","wirelesscommunicationsmobilecomputing":"C","wirelesscommunicatismobilecomputing":"C","wcmc":"C","wirelessnetworks":"C","wirelessnetwks":"C","wn":"C","ieeetransactionsondependableandsecurecomputing":"A","transactisdependablesecurecomputing":"A","tdsc":"A","ieeetransactionsoninformationforensicsandsecurity":"A","transactisinfmatifensicssecurity":"A","tifs":"A","journalofcryptology":"A","journalcryptology":"A","jc":"A","acmtransactionsoninformationandsystemsecurity":"B","transactisinfmatisystemsecurity":"B","tiss":"B","computerssecurity":"B","cs":"B","designscodesandcryptography":"B","designscodescryptography":"B","dcc":"B","journalofcomputersecurity":"B","journalcomputersecurity":"B","jcs":"B","computerlawandsecurityreview":"C","computerlawsecurityreview":"C","clsr":"C","eurasipjournaloninformationsecurity":"C","eurasipjournalinfmatisecurity":"C","ejis":"B","ietinformationsecurity":"C","ietinfmatisecurity":"C","informationmanagementcomputersecurity":"C","infmatimanagementcomputersecurity":"C","imcs":"C","internationaljournalofinformationandcomputersecurity":"C","journalinfmaticomputersecurity":"C","jics":"C","internationaljournalofinformationsecurityandprivacy":"C","journalinfmatisecurityprivacy":"C","jisp":"C","journalofinformationsecurityandapplication":"C","journalinfmatisecurityapplicati":"C","jisa":"C","securityandcommunicationnetworks":"C","securitycommunicatinetwks":"C","scn":"C","acmtransactionsonprogramminglanguagessystems":"A","transactisprogramminglanguagessystems":"A","tpls":"A","acmtransactionsonsoftwareengineeringandmethodology":"A","transactisstwareengineeringmethodology":"A","tsem":"A","ieeetransactionsonsoftwareengineering":"A","transactisstwareengineering":"A","tse":"A","automatedsoftwareengineering":"B","empiricalsoftwareengineering":"B","empiricalstwareengineering":"B","ese":"B","ieeetransactionsonservicecomputing":"B","transactisservicecomputing":"B","tsc":"B","ietsoftware":"B","ietstware":"B","informationandsoftwaretechnology":"B","infmatistwaretechnology":"B","ist":"B","journaloffunctionalprogramming":"B","journalfunctialprogramming":"B","jfp":"B","journalofsoftwareevolutionandprocess":"B","journalstwareevolutiprocess":"B","jsep":"B","journalofsystemsandsoftware":"B","journalsystemsstware":"B","jss":"B","requirementsengineering":"B","scienceofcomputerprogramming":"B","sciencecomputerprogramming":"B","scp":"B","softwareandsystemmodeling":"B","stwaresystemmodeling":"B","ssm":"B","softwaretestingverificationandreliability":"B","stwaretestingverificatireliability":"B","stvr":"B","softwarepracticeandexperience":"B","stwarepracticeexperience":"B","spe":"B","computerlanguagessystemsandstructures":"C","computerlanguagessystemsstructures":"C","clss":"C","internationaljournalonsoftwareengineeringandknowledgeengineering":"C","journalstwareengineeringknowledgeengineering":"C","jseke":"C","internationaljournalonsoftwaretoolsfortechnologytransfer":"C","journalstwaretoolsftechnologytransfer":"C","jstftt":"C","journaloflogicandalgebraicprogramming":"C","journallogicalgebraicprogramming":"C","jlap":"C","journalofwebengineering":"C","journalwebengineering":"C","jwe":"C","serviceorientedcomputingandapplications":"C","serviceientedcomputingapplicatis":"C","sica":"C","softwarequalityjournal":"C","stwarequalityjournal":"C","sqj":"C","theoryandpracticeoflogicprogramming":"C","ypracticelogicprogramming":"C","yplp":"C","acmtransactionsondatabasesystems":"A","transactisdatabasesystems":"A","tds":"A","acmtransactionsoninformationsystems":"A","transactisinfmatisystems":"A","tis":"A","ieeetransactionsonknowledgeanddataengineering":"A","transactisknowledgedataengineering":"A","tkde":"A","thevldbjournal":"A","vldbjournal":"A","vj":"A","acmtransactionsonknowledgediscoveryfromdata":"B","transactisknowledgediscoveryfromdata":"B","tkdfd":"B","acmtransactionsontheweb":"B","transactisweb":"B","tw":"B","advancedengineeringinformatics":"B","advancedengineeringinfmatics":"B","aei":"B","dataandknowledgeengineering":"B","dataknowledgeengineering":"B","dke":"B","dataminingandknowledgediscovery":"B","dataminingknowledgediscovery":"B","dmkd":"B","europeanjournalofinformationsystems":"B","europeanjournalinfmatisystems":"B","geoinformatica":"B","geoinfmatica":"B","g":"B","informationprocessingandmanagement":"B","infmatiprocessingmanagement":"B","ipm":"B","informationsciences":"B","infmatisciences":"B","informationsystems":"B","infmatisystems":"B","journaloftheamericansocietyforinformationscienceandtechnology":"B","journalamericansocietyfinfmatisciencetechnology":"B","jasfist":"B","journalofwebsemantics":"B","journalwebsemantics":"B","jws":"B","knowledgeandinformationsystems":"B","knowledgeinfmatisystems":"B","kis":"B","distributedandparalleldatabases":"C","distributedparalleldatabases":"C","dpd":"C","informationandmanagement":"C","infmatimanagement":"C","informationprocessingletters":"C","infmatiprocessingletters":"C","ipl":"C","informationretrievaljournal":"C","infmatiretrievaljournal":"C","irj":"C","internationaljournalofcooperativeinformationsystems":"C","journalcooperativeinfmatisystems":"C","jcis":"C","internationaljournalofgeographicalinformationscience":"C","journalgeographicalinfmatiscience":"C","jgis":"C","internationaljournalofintelligentsystems":"C","journalintelligentsystems":"C","jis":"C","internationaljournalofknowledgemanagement":"C","journalknowledgemanagement":"C","jkm":"C","internationaljournalonsemanticwebandinformationsystems":"C","journalsemanticwebinfmatisystems":"C","jswis":"C","journalofcomputerinformationsystems":"C","journalcomputerinfmatisystems":"C","journalofdatabasemanagement":"C","journaldatabasemanagement":"C","jdm":"C","journalofglobalinformationtechnologymanagement":"C","journalglobalinfmatitechnologymanagement":"C","jgitm":"C","journalofintelligentinformationsystems":"C","journalintelligentinfmatisystems":"C","jiis":"C","journalofstrategicinformationsystems":"C","journalstrategicinfmatisystems":"C","jsis":"C","ieeetransactionsoninformationtheory":"A","transactisinfmatiy":"A","tiy":"A","informationandcomputation":"A","infmaticomputati":"A","siamjournaloncomputing":"A","siamjournalcomputing":"A","sjc":"A","acmtransactionsonalgorithms":"B","transactisalgithms":"B","ta":"B","acmtransactionsoncomputationallogic":"B","transactiscomputatiallogic":"B","tcl":"B","acmtransactionsonmathematicalsoftware":"B","transactismamaticalstware":"B","tms":"B","algorithmica":"B","algithmica":"B","a":"B","computationalcomplexity":"B","formalaspectsofcomputing":"B","fmalaspectscomputing":"B","fac":"B","formalmethodsinsystemdesign":"B","fmalmethodsinsystemdesign":"B","fmisd":"B","informsjournaloncomputing":"B","infmsjournalcomputing":"B","ijc":"B","journalofcomputerandsystemsciences":"B","journalcomputersystemsciences":"B","jcss":"B","journalofglobaloptimization":"B","journalglobaloptimizati":"B","jgo":"B","journalofsymboliccomputation":"B","journalsymboliccomputati":"B","jsc":"B","mathematicalstructuresincomputerscience":"B","mamaticalstructuresincomputerscience":"B","msics":"B","theoreticalcomputerscience":"B","eticalcomputerscience":"B","actainformatica":"C","actainfmatica":"C","ai":"A","annalsofpureandappliedlogic":"C","annalspureappliedlogic":"C","apal":"C","discreteappliedmathematics":"C","discreteappliedmamatics":"C","dam":"C","fundamentainformaticae":"C","fundamentainfmaticae":"C","fi":"C","higherorderandsymboliccomputation":"C","higherdersymboliccomputati":"C","hsc":"C","journalofcomplexity":"C","journalcomplexity":"C","journaloflogicandcomputation":"C","journallogiccomputati":"C","jlc":"C","journalofsymboliclogic":"C","journalsymboliclogic":"C","jsl":"C","logicalmethodsincomputerscience":"C","lmics":"C","siamjournalondiscretemathematics":"C","siamjournaldiscretemamatics":"C","sjdm":"C","theoryofcomputingsystems":"C","ycomputingsystems":"C","ycs":"C","acmtransactionsongraphics":"A","transactisgraphics":"A","tg":"A","ieeetransactionsonimageprocessing":"A","transactisimageprocessing":"A","tip":"A","ieeetransactionsonvisualizationandcomputergraphics":"A","transactisvisualizaticomputergraphics":"A","tvcg":"A","acmtransactionsonmultimediacomputingcommunicationsandapplication":"B","transactismultimediacomputingcommunicatisapplicati":"B","computeraidedgeometricdesign":"B","cagd":"B","computergraphicsforum":"B","computergraphicsfum":"B","cgf":"B","graphicalmodels":"B","gm":"B","ieeetransactionsoncircuitsandsystemsforvideotechnology":"B","transactiscircuitssystemsfvideotechnology":"B","tcsfvt":"B","ieeetransactionsonmultimedia":"B","transactismultimedia":"B","tm":"B","journaloftheacousticalsocietyofamerica":"B","journalacousticalsocietyamerica":"B","jasa":"B","siamjournalonimagingsciences":"B","siamjournalimagingsciences":"B","sjis":"B","speechcommunication":"B","speechcommunicati":"B","computationalgeometrytheoryandapplications":"C","computatialgeometryyapplicatis":"C","cgya":"C","computeranimationandvirtualworlds":"C","computeranimativirtualwlds":"C","cavw":"C","computersgraphics":"C","discretecomputationalgeometry":"C","discretecomputatialgeometry":"C","dcg":"C","ieeesignalprocessingletters":"C","signalprocessingletters":"C","spl":"C","ietimageprocessing":"C","iip":"C","journalofvisualcommunicationandimagerepresentation":"C","journalvisualcommunicatiimagerepresentati":"C","jvcir":"C","multimediasystems":"C","ms":"C","multimediatoolsandapplications":"C","multimediatoolsapplicatis":"C","mta":"C","signalprocessing":"C","sp":"C","signalprocessingimagecommunication":"C","signalprocessingimagecommunicati":"C","spic":"C","thevisualcomputer":"C","visualcomputer":"C","vc":"C","artificialintelligence":"A","ieeetransonpatternanalysisandmachineintelligence":"A","transpatternanalysismachineintelligence":"A","tpami":"A","internationaljournalofcomputervision":"A","journalcomputervisi":"A","jcv":"A","journalofmachinelearningresearch":"A","journalmachinelearningresearch":"A","jmlr":"A","acmtransactionsonappliedperception":"B","transactisappliedpercepti":"B","tap":"B","acmtransactionsonspeechandlanguageprocessing":"B","transactisspeechlanguageprocessing":"B","tslp":"B","autonomousagentsandmultiagentsystems":"B","automousagentsmultiagentsystems":"B","aams":"B","computationallinguistics":"B","computervisionandimageunderstanding":"B","computervisiimageundersting":"B","cviu":"B","evolutionarycomputation":"B","evolutiarycomputati":"B","ieeetransactionsonaffectivecomputing":"B","transactisaffectivecomputing":"B","tac":"B","ieeetransactionsonaudiospeechandlanguageprocessing":"B","transactisaudiospeechlanguageprocessing":"B","taslp":"B","ieeetransactionsoncybernetics":"B","transactiscybernetics":"B","ieeetransactionsonevolutionarycomputation":"B","transactisevolutiarycomputati":"B","tec":"B","ieeetransactionsonfuzzysystems":"B","transactisfuzzysystems":"B","tfs":"B","ieeetransactionsonneuralnetworksandlearningsystems":"B","transactisneuralnetwkslearningsystems":"B","tnnls":"B","internationaljournalofapproximatereasoning":"B","journalapproximatereasing":"B","jar":"B","journalofartificialintelligenceresearch":"B","journalartificialintelligenceresearch":"B","jair":"B","journalofautomatedreasoning":"B","journalautomatedreasing":"B","journalofspeechlanguageandhearingresearch":"B","journalspeechlanguagehearingresearch":"B","jslhr":"B","neuralcomputation":"B","neuralcomputati":"B","nc":"B","neuralnetworks":"B","neuralnetwks":"B","nn":"B","patternrecognition":"B","acmtransactionsonasianlanguageinformationprocessing":"C","transactisasianlanguageinfmatiprocessing":"C","talip":"C","appliedintelligence":"C","artificialintelligenceinmedicine":"C","aiim":"C","artificiallife":"C","al":"C","computationalintelligence":"C","computatialintelligence":"C","ci":"C","computerspeechandlanguage":"C","computerspeechlanguage":"C","connectionscience":"C","cnectiscience":"C","decisionsupportsystems":"C","decisisupptsystems":"C","dss":"C","engineeringapplicationsofartificialintelligence":"C","engineeringapplicatisartificialintelligence":"C","eaai":"C","expertsystems":"C","expertsystemswithapplications":"C","expertsystemswithapplicatis":"C","eswa":"C","fuzzysetsandsystems":"C","fuzzysetssystems":"C","fss":"C","ieeetransactionsongames":"C","transactisgames":"C","ietcomputervision":"C","ietcomputervisi":"C","icv":"C","ietsignalprocessing":"C","isp":"C","imageandvisioncomputing":"C","imagevisicomputing":"C","ivc":"C","intelligentdataanalysis":"C","ida":"C","internationaljournalofcomputationalintelligenceandapplications":"C","journalcomputatialintelligenceapplicatis":"C","jcia":"C","internationaljournalofneuralsystems":"C","journalneuralsystems":"C","jns":"C","internationaljournalofpatternrecognitionandartificialintelligence":"C","journalpatternrecognitiartificialintelligence":"C","jprai":"C","internationaljournalofuncertaintyfuzzinessandknowledgebasedsystem":"C","journaluncertaintyfuzzinessknowledgebasedsystem":"C","jufks":"C","internationaljournalondocumentanalysisandrecognition":"C","journaldocumentanalysisrecogniti":"C","jdar":"C","journalofexperimentalandtheoreticalartificialintelligence":"C","journalexperimentaleticalartificialintelligence":"C","jeeai":"C","knowledgebasedsystems":"C","ks":"C","machinetranslation":"C","machinetranslati":"C","mt":"C","machinevisionandapplications":"C","machinevisiapplicatis":"C","mva":"C","naturalcomputing":"C","naturallanguageengineering":"C","nle":"C","neuralcomputingapplications":"C","neuralcomputingapplicatis":"C","nca":"C","neuralprocessingletters":"C","npl":"C","neurocomputing":"C","patternanalysisandapplications":"C","patternanalysisapplicatis":"C","paa":"C","patternrecognitionletters":"C","patternrecognitiletters":"C","prl":"C","softcomputing":"C","stcomputing":"C","webintelligence":"C","wi":"C","acmtransactionsoncomputerhumaninteraction":"A","transactiscomputerhumaninteracti":"A","tci":"A","internationaljournalofhumancomputerstudies":"A","journalhumancomputerstudies":"A","jhcs":"A","computersupportedcooperativework":"B","computersupptedcooperativewk":"B","cscw":"B","humancomputerinteraction":"B","humancomputerinteracti":"B","hci":"B","ieeetransactionsonhumanmachinesystems":"B","transactishumanmachinesystems":"B","ths":"B","interactingwithcomputers":"B","iwc":"B","internationaljournalofhumancomputerinteraction":"B","journalhumancomputerinteracti":"B","jhi":"B","usermodelinganduseradaptedinteraction":"B","usermodelinguseradaptedinteracti":"B","umui":"B","behaviourinformationtechnology":"C","behaviourinfmatitechnology":"C","bit":"C","personalandubiquitouscomputing":"C","persalubiquitouscomputing":"C","puc":"C","pervasiveandmobilecomputing":"C","pervasivemobilecomputing":"C","pmc":"C","journaloftheacm":"A","journal":"A","j":"A","proceedingsoftheieee":"A","proceedings":"A","p":"A","bioinformatics":"B","bioinfmatics":"B","b":"B","briefingsinbioinformatics":"B","briefingsinbioinfmatics":"B","bib":"B","cognitioninternationaljournalofcognitivescience":"B","cognitijournalcognitivescience":"B","cjcs":"B","ieeetransactionsonautomationscienceandengineering":"B","transactisautomatiscienceengineering":"B","tase":"B","ieeetransactionsongeoscienceandremotesensing":"B","transactisgeoscienceremotesensing":"B","tgrs":"B","ieeetransactionsonintelligenttransportationsystems":"B","transactisintelligenttransptatisystems":"B","tits":"B","ieeetransactionsonmedicalimaging":"B","transactismedicalimaging":"B","tmi":"B","ieeetransactionsonrobotics":"B","transactisrobotics":"B","tr":"B","ieeeacmtransactionsoncomputationalbiologyandbioinformatics":"B","transactiscomputatialbiologybioinfmatics":"B","tcbb":"B","journalofcomputerscienceandtechnology":"B","journalcomputersciencetechnology":"B","jcst":"B","journaloftheamericanmedicalinformaticsassociation":"B","journalamericanmedicalinfmaticsassociati":"B","jamia":"B","ploscomputationalbiology":"B","ploscomputatialbiology":"B","pcb":"B","sciencechinainformationsciences":"B","sciencechinainfmatisciences":"B","scis":"B","thecomputerjournal":"B","computerjournal":"B","cj":"B","worldwidewebjournal":"B","wldwidewebjournal":"B","wwwj":"B","bmcbioinformatics":"C","bmcbioinfmatics":"C","cyberneticsandsystems":"C","cyberneticssystems":"C","frontiersofcomputerscience":"C","frtierscomputerscience":"C","fcs":"C","ieeegeoscienceandremotesensingletters":"C","geoscienceremotesensingletters":"C","grsl":"C","ieeejournalofbiomedicalandhealthinformatics":"C","journalbiomedicalhealthinfmatics":"C","jbhi":"C","ieeetransactionsonbigdata":"C","transactisbigdata":"C","tbd":"C","ietintelligenttransportsystems":"C","ietintelligenttransptsystems":"C","iits":"C","journalofbiomedicalinformatics":"C","journalbiomedicalinfmatics":"C","jbi":"C","medicalimageanalysis":"C","mia":"C"}';
    ccfdata = JSON.parse(ccfdata);
    let doi_ico = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAD9BJREFUeF7Vm3mcVcWVx7+n7n3NIt00qKgBmgZFEBU3XJMMamQEAeMSSZQZRA1xVBjRT2LyMeNOIoIwYogLLtkkiWjUyCKtM6KjfjSKQlRkCQLdorI1S++v37115lP3vde816+bXgAl9U9/Xt+6Vef86tSpc351rvAVNl1ytk/txs6EJo9YPEZ9IhZN39ELCDokiNl6dnSslTGf1H9VYsn+nEiXDOpCdXXvUBkovgxQ6IvVngiFghxklTw3v4GEGmqw7BLhS4yu11BXh8ZblVenZXLxhp37S859DkBK6cHWN2draL+FyHEoBwOd26hEHegORNaI0Tet9V/1bWKZjCrb0cZx9th9nwGgi/scEaqcj3IJqmeCHLIvBQV2IiwXwwumXl+UC0vX74vx9xoALTmsh9VOl6hlPMpJkDTr/dhCEVYhZq6xtX+UkV+W7s1c7QZA5w3KCztXDsfzJmP5FpB0aF9dUzEsU49febHOz8o5n1S1Z+p2AaAvFRdbZbIq44Gu7Zl4H75Ti/C8Z8N7ZdRnH7d13DYDkFjY91/E6L1YzmrrZPuzvyAfq9o7vJrSv8oYwtbO1WoA3Bke1qy7HJG7USlu7QRfaT/RchFzn6lMzJYxG2tbM3erAHD73RbUXKchdwDdWjPw19inVo3O8E3XqXL+h9UtydEiALr0lJjdumOSqr0TJb+lAQ+Q53E1dqYfBFNk9Bc1e5JpjwDonRh7evEEVe5DW3Z2TQ2mXyki6dkiSerE2KlG86bKBWvjzYmxRwCChUWjwDwGHN6SHkEA1fFsdVUhLwad8wRatLWWZtjDc7XJ8WNdAIVEJagBI1Ui8mNvxIZH2wxA/fy+J3ie/l6VwS2JZgx8VKbc9ruAuoQiKWUTIYweYpg42m/4X0tjtfm5BtDpcKRoPNJ9CKhFy99GNz4FtVtBvI2qjIuNKl3S1NhNrou+0q+rBvqYtXpZawTyPHj7H8rYqQlq4zQoGw+Ua87z+OVVPrJf9oKC3wUz+D7k8JFZouoXL2A/uhWCGmcdb3lh4gq58Iuyxvo0CUBY0neSBjod6NBaAN5Zq4ybngTApEaNJ2D8dwxTrtxPANh65IjRmBNngddI1KCGcPkk2LwYJE9VmO53Kv65nPNakKlTDgC6uOjYwJq/iDKgNcq7Ps4CvhYAtB458kbMwFtyRVXFrpyCrn/EAeCeb1XxfhC74NNXmwUgOvK2lU/XkBtbq/zXCoCzgJ5jMCdMB+NnixzWES6fDJvmpwFwDvI5L+g4Xr67ujLdOcsCdGHx6aHoX1Dp+U8BgPP+nQ7BnDgb6X5mtg/YugS7/Eaor9jtlKASG47zR3/2Qg4ALtS18Q33t3X1v1YLcJO7UyD/aKTfdUjhKaCC7vwbuu4hqFoHkm0ZSvic73cbl44SGyxAX+o7IFQWoHpUW1b/awcgDYLbAh0Pi8IA6jYngWmkfKSX6na1cknswg2vu58NAISL+07UUB9wPm1PAKRfyDzV9t4JqhMMspI4Fzw5UdoQQbktEWll9riGKnq/P6L0FhFnLw6UJYO6aLz6TzaUUU296Y41N2Z9CIkwGejEjBAzScDd77afAk5pt0oCXhfo0B1iByUncookqiFeDoHjOZwAjZxcg6CpcSJJGvn36J1cAAWWG08vkOGlX0ZP4y/1HeypXdTY+UURnUDZNuWtT0KWrYVtFRode4d2Efr3hjMHehxTJLy7Vvn3aa2MA5ziJgaFJyGHnocUDoaOvSAvPwWAQrwC6krR7e+hm0ugamUyvM1aXQt5hUiPYcnxMltYh255DRKOQ80BoVI1vCw26rOS6EnwcvF4Ah4lRVO7/7nwdletMu/NkLmvWtZugtAtWDLajpqzjG8cDOOHGY7pY5g4O6CqroVASOuhy0Ck348iwcWtfAtNqzein/0BLf0dBNW7rUET0HUQ5tS5SF731DZKmqTGt2GXjoVdq0By2TqFu2IjN9wpOg/PFvR5QEOZmJbDKb92k3LfswEl7yvWRZzNbKvAJp8d10dY/YXior9015xI0Cnf7QzMoLuQwuNa0jv7uU1gS/+ErpmaAsFtFQfAMZjT5iF52TSFxsux742BXaubBABhvpfoMFZ0QVG30JN5WDkvvfLrNiu3PBnwxgqlQ2z3ijYnsXM9NgVEZp8sAGwCCgZjBs9Eug5sm/Lp3jbArpuD/mMGaJj0IREATyctIKNFFvDe95sFQGFVYBghurjXUYH6C8QywO15l9L+7DcBz7yldGqC4E6kMk+36m713XbwXObZhEppAO4ZZzB+PubEB5Ee57ZP+fRbQTXhx7fC588m93Y7AYhCY5VLJTG/+GzxmIflUOPBi+9ZJj8SRMqlkxo3t1tl5wNOPkq45NvCYQcbyr600RZZtja5TTL7R841lQzdM87iHTEmytrwmr420KoN6I6/QXw7dDoC6XYm0vmwJsHSncuwS6+Buk1QeGy7LAC02hqZKEFJ0fcIzRMoBXWhcuOcgAXvJE0/y6kqXHSG8JPLfPocnCQ43Gm1rVp5siTk0UUWl/9ngpAEQJgyviPeib9GDj+/aYW2/A925b1QvToybRUfKTwdc+w9SNdjct8J49i/34x+/gx0O6G9AASC3CZBSZ+rCeVXBjqv26pcMS3Bxm3ZTi8RwGkDhYcn+hzRVQgzSGfnMCviyqSHAl5ZpuRlHNcRAOcqU67ti3/G09C5V44yWvEJ9oNrk2GrSVuHgq2DHsOT2yavIOc9u+E32BW3Il2PaycAqIreK6kI8H7Po8PrKy1Xzwiod8d0xtHp6K7bxhr+Y7ifpXxaKhcXzHk54M65NgqO0i0C4JyQKZPPwh/yW2isiEtZV09HP30ApDH14PZUDHPKk8ih384Fbsv/Yt+/GvL7p06BtjlBN6BiH5RwcfGNGjLN88hbtMxy3azUYZ+a0u19X+ChST4jTjLNAjD/PcvEh4LIV2Qdg+ckmHLzMPwhc8A/KNtTBzXY5TfA5pczUtaMLpJAjp2GKboiF4Dyd7DvjoX8vu0GANGHnQXcoKHOcBaw6APLtQ8GOc7PKTTrep+LTm0GAB/+/Iblx48HeBmW02ABNw3FH/JEirTM0MXl7MsmwaaFYJognyRAjv9vTK/v5QKw7e0kAAX92g2AwoMSvFJ8FQlme4bOS1ZYrpkRkHDWlzGl2xIThhtuvzyX2nL6OjL4p08meOaNpnyAZcoNx+Of/kfokHtjbj99BF01JTdYcWd8rDvmtKeQwuNzfcCXC7HLr0Xy2xcHRHmh8wHB4j6XYuVJAwUukrtieoItu8haydBCjwKYfYPPWQNNFPS45M05QCvwwjuW//ptdhjccAyeC1N+2B1vyO+Rbu72PLtpzUbssongjkDnB6JY23lZG+X4ZsBPc+N893TNTOyaqUjhXpwCRm4TXVQ8NIRnUA6tqld+OCvgzY814vMzm4sLBvSEWy7zOWOgRABtrYBFS0PmLLKUV+aGyw3H4JVg+v8cc9R1zZzrH2HX3A+73gcbh9ghSM+LMX1/FCU7Oa1+J+H710D5W1B4fDtPAa3G6A2ii3ofGYjnIsGBLtF67JWAu+eG+I2jGpc0WcjvBAN7Cx18KNuibCxPWoOLBhu33YGQYvJPwAx5AunU9B2L1u+CqrUQVkKHIqRLUS7Pl3bMX8xHP7wJwtpkMtSOUDhFkl4s+nxxYdiBeSjDnM6f7VAmzAr4cH32fk4r5yK+wFmo2wLe7lXfYyR4pYfRMMng9p/crGJNmkfjLVPttsz1sOuD5JN2hsIKK33iI5LZYH7xTLX8pxvP7evFyyw/eTxgeyXEmuMhMgRzllHQEeoSRCFxumVngxa8zphj7kF6X5pJVLZG72Sf+p3YVfegG59OFqQ0ZIPtSIaUF/2ww78l+YCS4isJmZPmA5xje/Fdy71/DpJRoZ/tFN07UQYYJP+eOkD41yHCr1+wVNZm3AwllKvO8/hF+mLEefa8bsiRNyFF30f81heOaVUp+ulM3I1PkshysXgCClPpcKxROly/HfuuS4eb5gMEe6c3suyuJCX2Ut/BYWNGSOCDTy1zSkLeWqHsSFfgOAZKwPfgyB5w0TcNY4Z6bNoFE2YmqHFXY6k1dcfnFWcbbv+Bvzu2iNigPDh8BKb35dD1eMQvaJr6syFatwUtfw3d8BRU/D1FhqRmcAAUDMSc/FgE7G6qRqKkyi6bABVrmqLTKtTKZbHR61/ezQnW1cy1lgsz7dFth+p6WFFm+XC9ZeNWqItDYT7072kY0l/ofYhEMUNFHWzYopFFpJtzjt07Q6/u0uhyNMXjxbpC1+OQgpMh/0jERYqOCLX1aN02qFiNVixNOkfHJ+QwO877doSDnMNsRHu5vVhVlswpGlFiKnzga/VIGbl1025WuKTP9RowqzFcroNzds7pBS5HSYXGbj6noIsJ0s0BlsWZpTLGiPBtsjkgEskn7uUGEtOm9pcmOcBmCdHIfpPESFaLqNpsa8lcGOw0/4KynzWwwtEwC/sdHYguENX+rfdK+6NnSvj9MXSkqJYr5uLYqPVvuJ+7L0aSp8F0tdy0v+Y+IMZVedbT+JXp0pnsu8GX+p0aavgcKrmJ+wEh/V4LUYm1Y/3RZfPTI2UDEN0Prr9PQ7l5r6c6EAcQedar6nSVjNldVZpbH7CgzzGBEVcf0AQXdSBq1WqZNisyJjZy/f9lvtFMhYg7EWSG+5Sh1cMf2B1VjZ3qd+x3e4sVIpGjXHRUQSjBI1guP7D1aqV0wuteGIyV0Rs/b/xGs1ev8cVFx/rW/EGTJfD/xE1KFcY1Nv0mnWBjLRMLew0X8R5va8XIgYOWVuKZm/3h6x9vTqY9Xr6rIuHLEW0+HT3ga4Qb61grRn5p1Jve7krRyB+4o7F+w/UacndrymUPkNWvE6P3myBx717VCqeViarHyrdN0JC70H3+LdC+xqxGDNNNUD+tJeWzQuGWpHDESZhfPAZ13wu0vY6opfH3yXNhiwhTTUcelnM2uDSwxdaGApzkWLqgz1mhJ7/AMrRtBTwtyrJXHURYptg7vKqyRfvli5FM6bTkG71tGLtR4SpUWi7x2CvVWnhZtBoX4qqdJheUfdLWqdpsAQ1+wX01ll93HmpdVelQtHV1xW0VcA/9Q4T3QGd7XtcXWvN1SFNjtRuABiDmH31ImBf/LqH7gkyGoPs9fE6I4SM8M9cE8Xlywecb9wbUvQagAYi/9jgsjHU6zwiXWJWzUFx1wz4bH9HtiCwV4Xnj1S+SYbml7+0BYt8JmJpdSwYfhK0aZI0OFbXftFbcxd6hKO5qeI9FmBkKWERrwJRjdI1g3zR4S/DkQxm2bld7FG3unX0OQJazdF+P11YVhTBIDIPADFDVIhFTqO4DLFV3JSwYiStaJcouY+RzVzWgISs9lRWoLd3XH0xnyvj/fRFxMDmrZZcAAAAASUVORK5CYII=";
    let pmid_ico = "data:image/png;base64,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";
    let pmcid_ico = "data:image/jpeg;base64,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";
    let arxiv_ico = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABWFJREFUWEfFl39M1HUYx184OxxcQHWHKYhKWupJpqYeosLU2WzlL344mYuWWanD+GFMolxzK9MKEcVKbIUMbR5pnCxZgYY/xnk6lZCDBAGRQ+TOROGcctK17xc5uF/iRVvPP7c99/k8z/t5f57P+/N8PbBg4X80D3sAKvJFOKklG7ka0ojZv3PA8BJJYiYzxTixrbHib09cKwA5ctSoea52EJXlR4je/Q3GNUaIGnB+hKLCTXOoLMok9/IJ1C/pMC40ioGtAMooQ3n+Lmu0n1NYUkWrphVLAZinDJwBAUCJupjC3EKSJoXwS3EVF3d1YJxo7AVgab+F7mgmyy+omBU6i3hlPHGtcZybeG5AFLxcFkzO0H1M6PIicc96Fo8IYm9TLXn1WlD1YWBV3VLKU8qpvtLKkY8SiRgdwSe3TpBHnmMvZACn7XCFAQm2PtklGaW6eCYsXA+Fe0k8X8De4ouYqk1YjltA2QeAIlWBrlxHwIIAMXju7DkwdT4bTmcxqcsb9T0dwR1GghohORmUSttkGg189RU0BoE2FGRfy8QFqsULUHR5kWvSs+X4WdiBSH2PWXtAWi/F5G8S/QHZ3SCCFgThldfMi13ehCZUEqqEgIBHn4heD2UaiH7YvIFRgbw2bzz5qguwAWvzOQCwDxuYEUh483AuG+rIfNfoUHF/jSEwsmgR3PaU4PO8j0Pl/QIQGIlIDiQtpdrt5D3B1ZlyFr9vYPCuJ3iwzuwUs4MQWVflg8oDoiJt9wkUi8dkdxSu/LtT5KybbnCpJy4BTE+GQ0mOiWbM6AZw5owtMFf+y1oJS78E3UHneuISQFQ0qFSOrHl4dPvqD49l1JKa3m524Tc1S4heBkc17gDIgDKl41UTpdNNAMIesRf+NjjohBjP6WsYDRYn1QsbhO4Wqp8f1YZ8msHKgCu/sKDh57GMzqsRlc/e3AYgBBBo9R7uSKkr/38CwFVwZ3fLfu2AARjOyomLv82mjM5+NUE4is0JEnJ2+lqPyH0AfZrQ2sVnOklK6tb7R5nwTqSnw9xxT/LT4e6V6h2jiHuhwo0mBPpeQ6GqJj18sQ1WrIAEu1evB1BGBmRvlfBmxEiCJ97n9fhr3G2WErkUjlW1O8XtthBFR0NpKRh6L4AY2E/iwZRgKT/uG2JzO4o2TiO5rtx9IRJGwyytnLXb7DI9vIoCI31tqI8HISOk+I3rrVTonR/S/UiJrHFfirezHVKuMMJXLVIp8XFveNaXBFGS78vbftWYtzh/iFwKkTDFpl+PF6eYSUU5bJoyiMi0xkd338N/haY1aEdSWjSEhO8vMTj2GW5vveNyuraZisMJJ4wwElqWYDjwKYnX/6C0vpm2Z9vYZBzGvJg2gsffw2t4hw0jQlLzHU9ataOo0w2h4mobaacaREgxKyaLMVqybvDA35EJ26lYGNIEK/yOlSf2sH/nWbx13uKkZDlqYfxBCcMqPFm78immKjytjJj0fpyruMe+0gauh9ynKqYTmbcMhFfwnSQ0V1uoeXUkG/1T8S3wEfcZV9uN5cLoHIqSmvoaKm9UEnSgiNgZv9MR2+FIvRtDadSpyWxWrEI+ezm0NKCq/5W091KxpD9N7bza3sdoTMkYsjqXIRm3EIW/AvZ8yFsnT1J46M/HOntXiwI1geRq5xARPBfVTS20/0Va9jHqf2sXj8RGB4QxugdxbmkOqd+W0Hlt4B8mQnGfeX2A4loLr6iyIQyaEppEzA5CJN0vZfIWKZq2m5hjzNCP9D4OPQKAgptv8HHbMbR3a9Gv1mPx7r7WTpVQYMJYbHSq3Y+T0NkaWbYMY4hR/Bjpa66H0n+byc19/wCDSG7/cKNFzQAAAABJRU5ErkJggg==";
    let crossref_ico = "data:image/png;base64,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";
    let pdf_OA_ico = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAUhSURBVFhHtZdZiBxVFIZ7eq2u6VnijDOZsWcLyGDAJUgEFxTR4IsLOmrENRF8cceAGygoiBBFQY1roiQiIUFRcHkYNFEEHUENKCERXGIIbomGyYPOYvfx+2/X7VSPzmIsC3666tatc/77n+XeTs12VUd6AxsID9pgs9nAkeHe1ux2TBVrFue+RsAGsD6G1y4JM3Ztc9auAhcUMw4Xg2t4vg7o/YU8C5dzrzHhjpacVfub3TzsjJVSqTZ+57w2Ak22bFPKVgQZu6GUtVMLaTcmnM3YyjBrJ+UPjw1n07ZCBHDen2mqj6dBpS+0VTUC1rQAEuuAm7wo3WQTfDzaVbBdvUV7pD3vVipJt3YWbO8xRXvr6IJlmfvZ4oDn0N7pCpxS3kYnNuIEhPlINBAYL4fWze9qDOyFhGTdw6/ed7NSkZHs23G8dlHejRVQztvwBKIQ1DEXiTqBdj7+mVV+0aPVFd0qRlBgH/d+zk/c39qStVdR5ACOdkNOueHfi4Axfv0MAhHGQCdouBoUOIQCa0ikoWwtrjL0Y0TgIhxJgeNzaRvrDuyh9pyFrF4h8TZEYLxcdKo9f1TenothQ0fBtnTktjCv4WogcAACy/OHV7QSBSbJ6k+J+Z5o9Rr/nOd7WnP1eR4i8AvzKGNHtgFDJSqk+D7zGq4XgftYGdzPynOxmAqKs1fEI5gxx0Nq7BeB/tAmCUUcIjFRDkaZ13AtA6tjWLU0k74bySovINvT4DGS7XHwFJCUkvYJ7tcB3cexGZn/iJwJSsj5CPztqp4YdlYHwoo3Mi/iHTO6H6VK3qBkHZlIDY0viMBET+5Y+kHlzxj72aC+odKVEzmQMsJWnKuhLaN5qaIq0ftECei9HJ9Pdagy7m/L2ZOEoZVEbAO9UYf01ZMogSkgg3KoXLmTijgOEkpYOVdCY8ohT8LuoywVnsQIyPmbyMx020jiqcSkhsLxA5KreamVn0wIShD4hL6RGAFl9iFQjiT+RqvDuVRxsQaao/1DlXNmIWPfJ6mAVv8uGxZTHTZ15J3x+PuXUUXSG03Mk0ssB2ToYyRlqoP2kB10Rk9C7+8iJ5SMslGNfZcIgWlQYWXaqJju0EU4tlH7IiFHb0f58W0UHn2XGAFBsVaTuTK267Hluq4pR8JSquJq3seVSYyAoJXJqJJNfYBPHXR6GuedNi896+zgSSVKQFA4nGF+n6Ef+E1rkJDsRP73cD7I2K/qlklVwT9BZSci6gNrqX8lIKbsdXLhJYjdTFu2of+RgMqsGoVEjvZD5EacYs7lxaOQ+hpFqIjkCGjVfo7yQQeR3T1F+0hdLyKiRoRJd3jRISYRAlqt3imu+lVsN9F4dJA9hyM8JuwySnRKivDuDI74OuR8hwKQ/m8EXEfD6Aes8iwMD5P9O1i1zpEncK+tdyBKRP1JsSUle5izo543Uy3VwSMgIKceaq33se0qyZ4luU5hs1En1ElIfUCnZXXJZlbckk7ZNCpIGcy6+f+KgFqoq/V6cpXcnxam2C0cTqcZ28Xq9XwaajwIMd2fRxiEc8GlhELENL6TuZy0FkaA1VZ+I8brYa1udzoObkPSJcgrZyLkTzk6G/KZXUEDeiAiMRP6/6iknFpQGS7ODavBSH5l9pcw138A/QPqQO6vXH+vtVcXFkh8iOw3oYr2fa10DVmvHFlOiG5nXNu3cuf3crAtcjP7Ve0LeibLwUHVtet00Ur1p0XQs09KDxciqRKbHw+f7xETfcErNS+p1F9b1z/MoMKQ6AAAAABJRU5ErkJggg==";
    let pdf_lol_ico = "data:image/png;base64,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";
    let pdf_oabtn_ico = "data:image/png;base64,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";
    let pdf_oadoi_ico = "data:image/png;base64,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";
    let pdf_scihub_ico = "data:image/png;base64,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";
    let pdf_libgen_ico = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH5gcDCgkGmWq6awAACUpJREFUeNrVm2uMVGcZx3/Pe2Zmd/ZStkYqSCkFqrWtrU0v2hBRulSMlxg/1C9WP9VLjEZjTLRdwK6xxcYvVT+pjffEptYPkFibVlmgJrZBQMqCWCulVnRBiiyFnes57+OH58zOsMDuzJwzO+s/Odm57LznPP/3Pc/l/z5HSBF967cALAdGgfcCbwZ6469D4AxwAjgCjAMvAIeAfwBTtXFUFUQoP/8Ifupkmpd4ATJpDqb2Z1LAA6tnfJ0F3hgfNwAfAUrASeBF4HngWWB/kAlORpGn544vU9w+0lECgjQHy61aj0BFledEuBF4yxw/yQCLgFXAe4C7gQ+r6gDKHoQos3KY8OhYxwhwaQ7m1daACK8Bm4BXWxwiD9wEfEOEDwgQuFQv8QKkugLCo2O4FXciIjjHBLbs7wKkxaGywBJgG1Dq5CpInd7yzk0gEC+GX2COrh2swcgDaZW/LhIAUIwqVMIQ4DjwyzaHyQF3q5IR7Zj9nSGAnaNkg+m768mYiHawVoSrW76BWkCqYbARxbGN5C0vOCLwBHAbcBo4B1SAIhYGq1iO4LFImgH6gMuBIWAx8Pf/OwIAAlEELYfefRUhQKkiGqpHs1mn3mvNV5wHESGKvIhID0JEB2+BjhIQegEcgpYazEMchKHivWJRTixOxIZ67xERBUrGUOfugdRGzqz9JrlcgFdFkPYcdwMJM6HxUimObew+AT3vHiXo6bno1eZzWQrlao8IfcAgcFnDMYTVBoPYfZ7FVmGAOWTB/EEJeA34N/AKcExEJlW1fsaoQHHng/NLQN/wwyB++n1/PmCqGA1hBdA1wFuxGmA58CbMkfVjGV42PlqJPFVgEjiK1QlbVdktQlVE8D6iOLapKwQsBoaBdcCtwEpsdjvqU2IyngC+BRwVEVSVQoKCqd0LXgZ8Bbi9wwbPxBDwaeDtwL2qejjpgC3VAtmVd6GqiHAcW5Jvwyq5+cZyTGv4DVCtvmE1TOxta6CWMsHC2H0gkDHaXsRmY1cXCAB4P1YvwMA1bQ/ScipcHBuhEk07j1eALwJ/7QIBfcDNAFQL80cAQGn7CF6F0ALCAaz2P9sFEvLSvhnJflkcux8nlgl41a3Aj7tAwBkFyxzmmwCA0tgIAjiRCHgEODiPxkfAP+1l+8VC4nK4eKZCoVwFU3a/R6L5aAn/BV4CYPcD3SNA94ySz02nE78G/jhPBOxT1SNJC8VUBJHi2MZa8XMa+CGWwnYSFeCnIlIQl4yC1FJXHyniBOApYC9wR8PXUXzRBUwImYpfF+LXlYbPK9hNXTvAoq4DerD6Yj8mmKJRsoI21UJ7aMN3qEQFgI8DH8L8wr8wSewUdt+eiw0vAxWFEFUP4itVifrz4Dyoc/YxJpCoKuWKFxdI4NVHgbOpT1IHQMrFSzmcqtX0jwGPxaJG08hllUpVCQWoVhBxoKAoGRfgAlEgdDEhkSZX9VOXWuL9QQC8V0Rk+iyd0HXq94hH1VEca21FJL6m/PBDeA/O2VKdietuX8xfdp/MIfSK6QKXYRrBIHWtoJ+6QBLER4a6kw4bjgJWFp8G/qNwAvS0xHV6IJ7QN09EawTc+gPyQ6emqW+0V1UDEVkEXAFcCVwFrMBK5yXYpuiimIBezKFlGgxt5VpCzFmeAyawBOwZ4GngRE1obYaEuU96/Si9S7OoKoHUo6YqeRGWA9dj+3k3YqrQEurS13zCA3uArweOp8PIdMTSjtk1xFmdYP7OB3FBEGsAgloIuhlYJ8Ia4DpsxrPzbOzF4IB3Aj+KPPeIsEuaUGbnjALxalqt8Angg9jefn+3rZ0Fy4CvqbJX7BaZk7VmMAC8A9P/FrLxNawV4RYEZO3mZARkMhmAF1T1HuBzWGKz0DGATRZafr19Aoo7NlEp2KaOiBQFHgU+CSQWI+cBy0SEnoEr2icAoPTsZgrbR1AFbw5hB3AvpgkuZPQ2Y2DT1WAtpsYkPAd8AYvBCxVVqG+pJSagRoJg3R8i/B7YjG1jLUScUVVCnyIBNRLAVoIqPwd+0m1LLwIl7ilwc+R6bQkitZUgQhV4GPhzty2egVPE+mRl1+x7h20rQtXI14qfV2MSit22ugH7VPVv2oRY2j4BOzfhvbd6XdlGrNAsAESYFlFwTaTCiTTBWrOCCGXgu1jbayeg1HuI5sLvgK1gesRcSKwIVUXJIGD79r8CPt/mUGVMMpvA9P5jWNY5ie06VTGdIA/TzRfLgKux+mQFphXeF/+mqW6SVESaBhXoFuC3WHPEXHgd0wzH4ws/CLyMiRxnnRDOEcJxTogizYmwAtgA7AQOFc6V6enPUW6CgFQ0wUJUIe9yKLrfiWwDPnORfyvHBu/D9g7+BBxR9JQ0tp3E8B6yLuJcNU9vplLLPc5DWPWIkwq2QfISQDYQ8v09HVKEZkF+/ZbaYGux5shBbOkexrbQdwH7VTkuQlT7naK4uBeutP38GcsPPzRTZluDCS5PAmVLzyNwDdFeodRCI1VqqnC1PEUu1w+wF+FRbMafAsZrDU7TrAtEEZR2XHyWetdvoVSsNk75IkyPuB+T1h6IIv22c6LlHbOXu3MhVaG2b3gLgqJIRkTCWhy21jmIRKhcQsc3cVWtPT6+KoXLxRqmP4s9gVKbsAmsQWJctTnt71JIdV/Ai1iGCGFtxgszL27dKPkgx3RLeV01JxMIXukT6zbbIPBRzLH2zDjVUqxBa7wSLJCtsb71W+Jnfey9xoY17hOcD8WrOhEZwKLGtQrvirXGm7ClPhuuFYRspHWH0i0Cakaq9yKBGwACsSSrpu/nMJVmMDZsKbDcOVmF9RVeFX+ea+G0g2FUFeeSLYHUVoBC1gXuS8DHqGv9tebIHix56Y2PNFTks5lMVn3kEw2SGgFioukIJp3PB46qKkVpZdFciDQfmFiNhav5wBS2BU8+YStCmgTkUx5vNhzA0udEITBtAkKSdCs1Dw/8DJgsVyqJB0uTgAnmRx98BngcIJdN7ktTI0Dt8bgDHTb+MJYOT0I6D0+kQsBl+QixBxw2Y+2zncAe4FPA/ugSzxq1g1SeHI2ufB8AzvEy8Acs7i/GYn+7JHusmjwEfB8LsQetLJbEzq+G9MrhYcsGRUBVMyJyA1a+3oY9RL0EywSDhvN6zHkWsc6PM5gqdAyTtcexavKEqiIOfJTc8zfif0NTQt6hIqCsAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA3LTAzVDEwOjA4OjU5KzAwOjAwEpp6/gAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wNy0wM1QxMDowODo1OSswMDowMGPHwkIAAAAASUVORK5CYII=";
    let warning_ico = "data:image/png;base64,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";
    let copy_ico = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA5RJREFUeF7t21voZ1MUB/DPmBnXmgfMwxRyaYqIKWNcksvLZNyiyCVTY8KDJx5ca9ySCIU8KJdQwhu5Ew8eCIkXwhQPI2Q8uJTIJa2x/8Xf75zf77f/+5zz82/v17PXWmd999prrb33Wku0j2NxNU7AnmPm9vn5a7yG2/DpQgQvaSG+HPdh6UIEdEz7M87Fi7lymgA4Gm9hJzyA+xPSv+cKKki3Mw7HFpyJn3AwvsqR0QTAUzgPD+HSHMY90MTivI6TcAtuzJHZBMAX2B9hCe/mMO6JZiMexys4JUdmEwDbsTf2xZc5jHuiORlv4G0clyOzAtCAWrWAugX+Xz4g8oFv5lnzD3gv5TIfNfmHxeID2vzfb7gMj46atFgA+GBEvrIXNuECRAJ3DN6fD8JiAaAtDD6MzXga55cGIBCOM0NkZaVHmO4N6dDTxHuSPGAd3kEkdweWBmAuZS6t/By/W1POvxAA9sE2fIeVpQHYA0dhWQcI/JoyvLYD2CQW0CkAHeg9FcsKwARngWoBXfqAqey1g8l1Cwy9BTakbKvtbjF34cP73z0qe/sHw8Et4Nl0L5er5Di6u3BVy6TBAViF48dpkfn9z5QF/jjLAGTqVoxscAsopkkmowrA0FEgc+GKkVULGNoCjsQ56CIP+ANxmfH5LEeB53FaMYP+L6N7cOUsA3AoTu8IgMgDnhzzMlV9wNA+oKPFn5httYBqAeNfh+uNUJc3QlFEsX7iHfv3xLjtjUeKX6akGzV9cB/wXGYYjLe6BxcDACfiwikVCQuI8rb5r7lTstkxfXALyPnpkjQVgBoGaxgcWyVW84Au84CSDi2HV3WC1QlWJ1id4Lha4RoFahTIKJL6DKsRh503c+JTTzSXpFPlCy2n0qwt8AguxjM4uydlphUTrTNR/7cG1+KOBgZZAEQPTpSf7poakqJnaCviqnroESV5h+E6rE3H6kPwfUkAgtdZeAK7D61xi/xvccaYtp4sC5iTeQCuSH2DKxp+JIokdksrEWXrfYyo+nwV96YK0DaZCwJgEmUiDkdOfipemoSg5zkVgJw8YJpFiq7NqBa7KPmMaWj7mHsEPkwg7DdfYIln7dtxDeKlOBzSrI3W/ysBQNTgf4xd8BjuxCeI9/0hx0Epl4kcIfqf4/0iGq7/NUoAEAzjajx6cpYPqXGL7Jtw86jvpQAI3lEtcn3q5Z2FVvtoqo623yi2fLkJnL8Au+yIUNZdUAkAAAAASUVORK5CYII=";

    const def = {
        mDOI: /(10\.\d{4,9}\/[-._;()<>/:0-9a-zA-Z]+)\b/gi,
        mDOIURL: /^(?:https?\:\/\/)(?:dx\.)?doi\.org\/(10\.\d{4,9}\/[-._;()<>/:0-9a-zA-Z]+)\b/i,
        mArXiv: /arXiv:(\d{4}\.\d{4,5}[v\d+]*)\b/gi,
        mArXivURL: /^https?:\/\/arxiv\.org\/abs\/(\d{4}\.\d{4,5}[v\d+]*)\b/i,
        mPMIDURL: /^https?:\/\/(www|pubmed)\.ncbi\.nlm\.nih\.gov(\/pubmed)?\/\d{5,8}\b/i,
        mPMCID: /PMC\s?\d{5,8}\b/gi,
        mPMCIDURL: /^https?:\/\/www\.ncbi\.nlm\.nih\.gov\/pmc\/articles\/pmc\d{5,8}\b/i,
        t_crx: "b29vcG4uY29tL3N0YXRpYy9jcng=",
        t_1lib: "5YWo55CD5pyA5aSn55qE5pWw5a2X5Zu+5Lmm6aaG",
        t_req: "aHR0cHM6Ly9jLm9vb3BuLmNvbS9hcGk/Y2lkPXNjaWh1Yl9jcngmdHlwZT1pbmZv",
        t_tua: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.5249.119 Safari/537.36",
        t_zlib: "6Ziy5q2i572R56uZ5aSx5pWI77yM6K+35pS26JePIDxhIGhyZWY9Imh0dHBzOi8vd3d3Lm9vb3BuLmNvbSIgdGFyZ2V0PSJfYmxhbmsiPm9vb3BuLmNvbTwvYT4g5p+l55yL5pyA5paw572R5Z2A",
        t_if: "IF 影响因子，是科睿唯安出品的 Journal Citation Reports 期刊引证报告中的一项代表期刊影响大小的一项定量指标。",
        t_jcr: "JCR分区是科睿唯安公司制定，基于不同学科的当年影响因子高低进行排序，等比例分为Q1、Q2、Q3和Q4四个区，数据来源为《JCR-分区-影响因子-2022》",
        t_cas: "CAS分区是中科院文献情报中心制定，基于不同学科的3年平均影响因子高低进行排序，分为1、2、3和4四个区，数据来源为微信小程序《中科院文献情报分区中心表2021年12月》",
        t_top: "Top期刊，是指中科院分区中在某一研究领域内综合排名在前5%-10%的顶级期刊，包含中科院一区的所有期刊，和二、三区每年引用前10%的期刊。",
        t_ei: "EI 工程索引，是美国工程信息公司 Engineering information Inc. 出版的著名工程技术类综合性检索工具，数据来源为《CPXSourceList062022.xlsx》",
        t_cscd: "CSCD 中国科学引文数据库收录我国众多领域出版的中英文科技核心期刊和优秀期刊千余种，分为核心库和扩展库，此处未做详细区分，数据来源为《中国科学引文数据库来源期刊列表（2021-2022年度）》",
        t_pku: "北大核心《中文核心期刊要目总览》是由北京大学图书馆及北京十几所高校图书馆众多期刊工作者及相关单位专家参加的研究项目，数据来源为《中文核心期刊要目总览》",
        t_cssci: "CSSCI 中文社会科学引文索引由南京大学中国社会科学研究评价中心提供，用来检索中文人文社会科学领域的论文收录和被引用情况，分为核心库和扩展库，此处未做详细区分，数据来源为《CSSCI来源期刊目录（2021-2022）》",
        t_zyqk: "中国科技期刊卓越行动计划由中国科协、财政部、教育部、科学技术部、国家新闻出版署、中国科学院和中国工程院于2019年启动实施，设领军期刊、重点期刊、梯队期刊、高起点新刊、集群化试点及建设国际化数字出版服务平台、选育高水平办刊人才7个项目。",
        t_sos: "2021年中科院预警期刊，中国科学院文献情报中心于2021年12月31日发布《国际期刊预警名单》，预警期刊旨在提醒科研人员审慎选择成果发表平台、提示出版机构强化期刊质量管理。",
        t_ccf: "中国计算机学会推荐国际学术会议和期刊目录，数据来源为2019年4月25日中国计算机学会公布的第五版，暂时使用硬编码作为数据源",
        t_tip: "脚本安装成功，请重新刷新网页使用吧！\r\n\r\n功能简介：\r\n\r\n(1) 点击SciHub CRX图标，显示文章详细信息/下载信息\r\n\r\n(2) 显示期刊的等级信息（IF/分区/数据库收录情况等）\r\n\r\n(3) 中英互译：选中文字，按 T 翻译，按 Y 取消（快捷键可修改）"
    };
    const message = {
        success: (text) => { toast.fire({ title: text, icon: 'success' }); },
        error: (text) => { toast.fire({ title: text, icon: 'error' }); },
        warning: (text) => { toast.fire({ title: text, icon: 'warning' }); },
        info: (text) => { toast.fire({ title: text, icon: 'info' }); },
        question: (text) => { toast.fire({ title: text, icon: 'question' }); }
    };
    let toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: false,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
    });
    let base = {
        d(str) { return decodeURIComponent(escape(atob(str))); },
        e(str) { return btoa(unescape(encodeURIComponent(str))); },
        decode(str) { return decodeURIComponent(str); },
        encode(str) { return encodeURIComponent(str); },
        setV(name, value) { GM_setValue(name, value); },
        getV(name) { return GM_getValue(name); },
        delV(name) { GM_deleteValue(name); },
        isType(obj) { return Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, '$1').toLowerCase(); },
        get(url, type) {
            return new Promise((resolve, reject) => {
                GM_xmlhttpRequest({
                    method: "GET", url,
                    headers: { "User-Agent": def.t_tua },
                    responseType: type || 'json',
                    onload: (res) => { resolve(res.response || res.responseText); },
                    onerror: (e) => { reject(e); }
                });
            });
        },
        post(url, data, headers, h) {
            if (this.isType(data) === 'object') { data = JSON.stringify(data); }
            headers === undefined || headers.length == 0 ? headers = h === undefined ? { "Content-Type": "application/x-www-form-urlencoded" } : { "Content-Type": "application/json", "User-Agent": def.t_tua } : '';
            return new Promise((resolve, reject) => {
                GM_xmlhttpRequest({
                    method: "POST", url, data, headers,
                    responseType: "json",
                    onload: (res) => { resolve(res.response || res.responseText); },
                    onerror: (e) => { reject(e); }
                });
            });
        },
        addStyle(id, tag, css) {
            var doc = document, styleDom = doc.getElementById(id);
            if (styleDom) return;
            var style = doc.createElement(tag);
            style.id = id;
            style.innerHTML = css;
            doc.getElementsByTagName('head')[0].appendChild(style);
        },
        initConfig() {
            initOption = {
                'float_open': false,
                'trans_open': true,
                'link_open': true,
                'rank_open': true,
                'trans_key': ['T', 'Y'],
                'trans_engine': '百度翻译',
                'trans_color': '#1b538c',
                'scicrx_color': '#1b538c',
                'libgen_url': 'https://libgen.gs',
                'scihub_url': 'https://sci-hub.wf'
            };
            base.getV('odata') === undefined && base.setV('odata', initOption);
            odata = base.getV('odata'); for (const k in initOption) { odata[k] === undefined && base.setV('odata', initOption); }
        },
        async getBaseURL() {
            var rUrl = base.d(def.t_req);
            var tdata_times = base.getV('tdata_times');
            if (tdata_times === undefined || new Date().getTime() - tdata_times > 2.5e8) {
                result = await base.get(rUrl);
                if (result.version > GM_info.script.version) base.setV("newVersion", result.website);
                base.setV('tdata_times', new Date().getTime());
                base.setV('tdata', result.info);
            }
            if (base.getV('sdata')) sdata = base.getV('sdata');
            if (base.getV('odata')) { odata = base.getV('odata'); scihub_link = odata.scihub_url; libgen_link = odata.libgen_url; }
            if (base.getV('tdata')) tdata = JSON.parse(base.d(base.getV('tdata')));
            if (odata.link_open) { Target = "_blank"; } else { Target = "_self"; }
            var jdata_time = base.getV('jdata_time');
            if (jdata_time === undefined || new Date().getTime() - jdata_time > 2.5e9) {
                var resj = await base.get(tdata.jurl);
                if (resj) { base.setV('jdata', resj); base.setV('jdata_time', new Date().getTime()); alert(def.t_tip); location.reload(); }
            } else { jdata = JSON.parse(base.d(base.getV('jdata'))); }
            if (base.getV('kdata') === undefined || base.getV('kdata_time') === undefined || new Date().getTime() - base.getV('kdata_time') > 7.2e6) upToken.all();
            var zlib = $('#searchFormWithLogo .color4').html(); if (zlib) { $('#searchFormWithLogo .color4').html(zlib.replace(base.d(def.t_1lib), base.d(def.t_zlib))); }
            if (site.indexOf('sci-hub') > -1) {
                var pdfUrl = $('#pdf').attr('src');
                if (pdfUrl) { pdfUrl = pdfUrl.replace(/\.sci-hub\.(st|cat)/, ".sci-hub.se").replace(/(moscow|twin)\.(ggws\.net|bban\.top)/, "zero.sci-hub.ru"); $('#pdf').attr('src', pdfUrl); }
                var srrc = $("#first>h1>img").attr("src"); if (srrc && srrc.indexOf("bdstatic") == -1) { $("#first>h1>img").attr("src", tdata.wechat); $("#first>h1>p:nth-child(2)").remove(); }
            }
        },
        registerMenu() {
            GM_registerMenuCommand('选项设置', () => { GM_openInTab(tdata.scicrx, { active: true }); });
            GM_registerMenuCommand('免费软件', () => { GM_openInTab(tdata.software, { active: true }); });
            GM_registerMenuCommand('点GG支持', () => { GM_openInTab(tdata.ad, { active: true }); });
        },
        addInitStyle() {
            var color = odata.scicrx_color, tcolor = odata.trans_color;
            var css = `.translate_span{color: ${tcolor}}.entryName,.closeBtn,.refreshBtn{background: ${color}} ${tdata.css}`;
            base.addStyle('scicrx_style', 'style', css);
        },
        runRegexOnDoc(re, host) {
            if (!host || host == myHost) {
                var m = re.exec(docAsStr);
                if (m && m.length > 1) { return m[1]; }
            } return false;
        },
        t(reg) { return reg.test(location.href); },
        pageListener() {
            doc.on('click', '.closeBtn', () => {
                $('#scihubcrx').remove();
                $(".paper-info").removeClass("pclked");
            });
            doc.on('click', '.refreshBtn', () => {
                var pid = $('#scihubcrx').attr('pid');
                var pid_type = $('#scihubcrx').attr('pid-type');
                $('.entryLink').empty();
                utils.getPaperInfo(pid, pid_type, true);
                message.success('刷新成功！');
            });
            doc.on('click', '.copyIcon', (e) => {
                var copyid = e.currentTarget.attributes.copyid.value;
                if (copyid) {
                    GM_setClipboard(e.currentTarget.attributes.copyid.value);
                    message.success('复制成功 - ' + copyid);
                } else {
                    message.success('复制失败 - ' + copyid);
                }
            });
            doc.on('click', '.paper-info', (e) => {
                if (e.currentTarget.className == "paper-info pclked") {
                    e.currentTarget.className = "paper-info";
                    $('#scihubcrx').remove();
                } else {
                    $(".paper-info").removeClass("pclked");
                    e.currentTarget.className = "paper-info pclked";
                    var pid = e.currentTarget.attributes.paper_id.value;
                    var pid_type = e.currentTarget.attributes.paper_id_type.value;
                    $('#scihubcrx').remove();
                    $('body').append(tdata.pContainer);
                    utils.getPaperInfo(pid, pid_type);
                }
            });
            if (site.indexOf(base.d(def.t_crx)) > -1) {
                $('#scicrx').attr('version', GM_info.script.version);
                for (const k in odata) {
                    switch (k) {
                        case 'trans_key':
                            $('#' + k).val(odata[k][0]); $('#h' + k).val(odata[k][1]); break;
                        case 'scicrx_color': case 'trans_color':
                            $('#' + k + ' input').val(odata[k]); $('#' + k + ' .layui-colorpicker-trigger-span').css({ background: odata[k] }); break;
                        case 'scihub_url': case 'libgen_url': case 'trans_engine':
                            $('#' + k + ' dd[lay-value="0"]').removeClass('layui-this');
                            $('#' + k + ' option').each((i, e) => {
                                $(e).text() === odata[k] &&
                                    $(e).attr('selected', true) &&
                                    $(e).parent().parent().find('input').val(odata[k]) &&
                                    $(e).parent().parent().find('dd[lay-value="' + $(e).val() + '"]').addClass('layui-this');
                            }); break;
                        default:
                            if (odata[k] === true) {
                                $('#' + k + ' input').prop("checked", true);
                                $('#' + k + ' .layui-form-switch').addClass('layui-form-onswitch');
                                $('#' + k + ' em').text("ON");
                            }; break;
                    }
                }
            }
            doc.on('click', '.sciSave', () => {
                var option = {};
                for (const k in odata) {
                    switch (k) {
                        case 'scicrx_color': case 'trans_color': case 'trans_engine': case 'scihub_url': case 'libgen_url':
                            option[k] = $('#' + k + ' input').val() ? $('#' + k + ' input').val() : odata[k]; break;
                        case 'trans_key': option[k] = [];
                            option[k][0] = $('#' + k).val() ? $('#' + k).val() : odata[k][0];
                            option[k][1] = $('#h' + k).val() ? $('#h' + k).val() : odata[k][1]; break;
                        default: if ($('#' + k + ' input')[0]) option[k] = $('#' + k + ' input')[0].checked; break;
                    }
                }
                base.setV('odata', option); upToken.all();
            });
            doc.on('click', '.sciReset', () => {
                if (confirm("提示：即将进行初始化，所有设置将重置，确认吗？")) {
                    base.setV('odata', initOption);
                    message.success('初始化设置成功，重启插件中！');
                    setTimeout(() => { location.replace(tdata.scicrx); }, 1.5e3);
                }
            });
            doc.on('click', '.sciDelete', () => {
                var del_time = base.getV('del_time');
                if (del_time === undefined || new Date().getTime() - del_time > 2e7) {
                    if (confirm("警告：除非插件无法使用，否则不要删除所有数据，你确认吗？")) {
                        base.delV('tdata_times'); base.delV('kdata_time'); base.setV('odata', initOption);
                        base.setV('del_time', new Date().getTime());
                        message.success('所有数据删除成功，重启插件中！');
                        setTimeout(() => { location.replace(tdata.scicrx); }, 1.5e3);
                    }
                } else {
                    alert("提示：6小时内删除过所有数据，请6小时后重试！");
                }
            });
            doc.keydown((e) => {
                if (odata.trans_open && site.indexOf(base.d(def.t_crx)) == -1) {
                    let t_num = 0, keyCode = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
                    var ele = $(".translate_span");
                    ele.each((i) => { let v = parseInt($(ele[i]).attr("value")); if (v > t_num) t_num = v; });
                    if (!tgoing && keyCode == odata.trans_key[0].charCodeAt(0)) {
                        let sCont, startNode, selected = window.getSelection();
                        selected && (sCont = selected.toString()) && (startNode = selected.getRangeAt(0));
                        if (sCont.length > 0) { startNode.collapse(false); utils.getTransInfo(sCont, startNode, t_num); }
                    } else if (keyCode == odata.trans_key[1].charCodeAt(0) && $(".translate_span").length > 0) {
                        utils.getTransInfo(0, 0, t_num);
                    }
                }
            });
        }
    };

    let findDoi = {
        fromMetaTags() {
            var mydoi, doiMetaNames = ["citation_doi", "doi", "dc.doi", "dc.identifier", "dc.identifier.doi", "bepress_citation_doi", "rft_id", "dcsext.wt_doi"];
            $('meta').each((i, meta) => {
                if (!meta.name) return true;
                if (doiMetaNames.indexOf(meta.name.toLowerCase()) < 0) return true;
                if (meta.scheme && meta.scheme.toLowerCase() != "doi") return true;
                var doiCandidate = meta.content.replace("doi:", "").replace(/https?:\/\/(www\.)?doi\.org\//i, "").trim();
                if (doiCandidate.indexOf("10.") === 0) mydoi = doiCandidate;
            });
            return mydoi;
        },
        fromDataDoiAttributes() {
            var dataDoiValues = $("*[data-doi]").map(() => { return this.getAttribute("data-doi"); }).get();
            var numUniqueDois = new Set(dataDoiValues).size;
            if (numUniqueDois === 1) return dataDoiValues[0];
        },
        fromScienceDirect() {
            if (!/sciencedirect/.test(myHost)) return;
            var sdoi = base.runRegexOnDoc(/SDM.doi\s*=\s*'([^']+)'/);
            if (sdoi) return sdoi;
            var doiLinkElem = $("a[class='doi']");
            if (doiLinkElem.length) {
                var m = doiLinkElem[0].innerHTML.match(/doi\.org\/(.+)/);
                if (m && m.length > 1) return m[1];
            }
        },
        fromIeee() { return base.runRegexOnDoc(/"doi":"([^"]+)"/, "ieeexplore.ieee.org"); },
        fromNumber() { return base.runRegexOnDoc(/Document Object Identifier \(DOI\): (10.*?)<\/p>/, "www.nber.org"); },
        fromEpistemonikos() {
            if (!/epistemonikos\.org/.test(myHost)) return;
            var doiLinkElem = $("a").filter(() => { return $(this).text() == 'DOI'; });
            if (doiLinkElem.length) return doiLinkElem[0].href;
        },
        fromPubmed() {
            if (!/ncbi\.nlm\.nih\.gov/.test(myHost)) return;
            var doiLinkElem = $("a[ref='aid_type=doi']");
            if (doiLinkElem.length) return doiLinkElem[0].innerHTML;
        },
        fromPsycnet() { return base.runRegexOnDoc(/href="\/doi\/(10\..+?)"/, "psycnet.apa.org"); },
        fromInderScienceOnline() {
            if (/(www\.)?inderscienceonline\.com/.test(myHost)) {
                var pbContextContent = $("meta[name='pbContext']").attr("content");
                if (pbContextContent) {
                    var m = /article:article:(10\.\d+[^;]*)/.exec(pbContextContent);
                    if (m && m.length > 1) return m[1];
                }
            } return;
        },
        fromCairn() {
            if (/(www\.)?cairn\.info/.test(myHost)) {
                var linkUrls = $('div#article-details').find('a').map(() => { return this.href; }).get();
                for (var i = 0; i < linkUrls.length; i++) {
                    var m = /https?:\/\/doi.org\/(10\.\d+\/.*)/.exec(linkUrls[i]);
                    if (m && m.length > 1) return m[1];
                }
            } return;
        }
    };

    let getInfo = {
        doi() {
            var doiFinder = [
                findDoi.fromMetaTags,
                findDoi.fromDataDoiAttributes,
                findDoi.fromScienceDirect,
                findDoi.fromIeee,
                findDoi.fromNumber,
                findDoi.fromPsycnet,
                findDoi.fromPubmed,
                findDoi.fromInderScienceOnline,
                findDoi.fromCairn,
                findDoi.fromEpistemonikos
            ];
            for (var i = 0; i < doiFinder.length; i++) { var myDoi = doiFinder[i](); if (myDoi) return myDoi; }
        },
        crossref(doi) {
            var url = tdata.unpaywall + doi + "?email=unpaywall@impactstory.org", rand = random;
            $.getJSON(url, (res) => {
                if (res) {
                    pdata.doi = doi;
                    try { if (!pdata.title) { var ptitle = res.title.replace(/<\/?(su(b|p)|i)>/g, ''); if (ptitle.length > 120) { ptitle = ptitle.slice(0, 115); ptitle = ptitle.slice(0, ptitle.lastIndexOf(" ")); ptitle += '...'; }; pdata.title = ptitle; } } catch (e) { }
                    try { if (!pdata.year) pdata.year = res.year; } catch (e) { }
                    try { if (!pdata.journal) pdata.journal = res.journal_name.replace("&amp;", "&").replace("—", "-"); } catch (e) { }
                    try { if (!pdata.publisher) pdata.publisher = res.publisher; } catch (e) { }
                    try { if (!pdata.issn) pdata.issn = res.journal_issns; } catch (e) { }
                    try {
                        if (!pdata.author) {
                            var au = res.z_authors, author = ''; for (var i = 0; i < au.length; i++) { author += au[i].given + ' ' + au[i].family; if (i < au.length - 1) author += '; '; }
                            if (author.length > 100) { author = author.slice(0, 99); author = author.slice(0, author.lastIndexOf(";")); author += ', et al.'; } pdata.author = author;
                        }
                    } catch (e) { }
                    try { if (!sdata.info) { sdata.info = utils.getJourInfo(pdata.journal); base.setV('sdata', sdata); utils.updatePanel('info', sdata.info); } } catch (e) { }
                    if (res.best_oa_location) { sdata.pdf_oadoi = res.best_oa_location.url_for_pdf; utils.updatePanel('pdf_oadoi', sdata.pdf_oadoi, rand); }
                    for (var k in pdata) { sdata[k] = pdata[k]; utils.updatePanel(k, pdata[k]); }
                    base.setV('sdata', sdata);
                }
            });
            var crourl = tdata.crossref + doi;
            $.getJSON(crourl, (res) => {
                if (res.message) {
                    var m = res.message; pdata.doi = doi;
                    try { var ptitle = m.title[0].replace(/<\/?(su(b|p)|i)>/g, ''); if (ptitle.length > 120) { ptitle = ptitle.slice(0, 115); ptitle = ptitle.slice(0, ptitle.lastIndexOf(" ")); ptitle += '...'; }; pdata.title = ptitle; } catch (e) { }
                    try { pdata.cited = m['is-referenced-by-count'] ? m['is-referenced-by-count'] : 0; } catch (e) { }
                    try { pdata.year = m.published['date-parts'][0][0]; } catch (e) { pdata.year = m['published-print']['date-parts'][0][0]; }
                    try { pdata.journal = m['container-title'][0].replace("&amp;", "&").replace("—", "-"); } catch (e) { }
                    try { pdata.jabb = m['short-container-title'][0]; } catch (e) { }
                    try { pdata.publisher = m.publisher; } catch (e) { }
                    try { pdata.issn = m.ISSN[0]; } catch (e) { }
                    try { sdata.web_cross = m.resource.primary.URL; utils.updatePanel('web_cross', sdata.web_cross, rand); } catch (e) { }
                    try {
                        var au = m.author, author = ''; for (var i = 0; i < au.length; i++) { author += au[i].given + ' ' + au[i].family; if (i < au.length - 1) author += '; '; }
                        if (author.length > 100) { author = author.slice(0, 99); author = author.slice(0, author.lastIndexOf(";")); author += ', et al.'; } pdata.author = author;
                    } catch (e) { }
                    try { if (!sdata.info || sdata.info[0] == 0) { sdata.info = utils.getJourInfo(pdata.journal); base.setV('sdata', sdata); utils.updatePanel('info', sdata.info); } } catch (e) { }
                    for (var k in pdata) { sdata[k] = pdata[k]; utils.updatePanel(k, pdata[k]); }
                    base.setV('sdata', sdata);
                }
            });
            if (/\/arXi/.test(doi)) {
                this.arxiv(doi.slice(15));
            } else {
                getPDF.scihub(doi);
                getPDF.libgen(doi);
                getPDF.oabtn(doi);
                getPDF.lol(doi);
            }
            getInfo.website(doi);
            getPDF.OA(doi);
        },
        pubmed(pid) {
            var puburl, rand = random;
            if (pid.indexOf('PMC') > -1) { puburl = tdata.pmcid_api + pid.slice(3); } else { puburl = tdata.pmid_api + pid; }
            $.getJSON(puburl, (res) => {
                if (res) {
                    var pubInfo = {};
                    try { if (res.DOI) { pubInfo.doi = res.DOI; getInfo.crossref(res.DOI); } } catch (e) { }
                    try { if (res.PMID) { pubInfo.pmid = res.PMID; pubInfo.web_pmid = tdata.pmid + res.PMID; } } catch (e) { }
                    try { if (res.PMCID) { pubInfo.pmcid = res.PMCID; pubInfo.pdf_pmcid = tdata.pmcid + res.PMCID; } } catch (e) { }
                    for (var k in pubInfo) { sdata[k] = pubInfo[k]; utils.updatePanel(k, pubInfo[k], rand); }
                }
            });
        },
        arxiv(pid) {
            var url = tdata.arxiv_api + pid, rand = random;
            $.ajax({
                type: "GET", url, dataType: 'xml',
                success: (res) => {
                    var entry = $(res).find("entry");
                    try { pdata.doi = '10.48550/arXiv.' + pid; } catch (e) { }
                    try { var ptitle = $(entry).find("title").text().replace(/<\/?(su(b|p)|i)>/g, ''); if (ptitle.length > 120) { ptitle = ptitle.slice(0, 115); ptitle = ptitle.slice(0, ptitle.lastIndexOf(" ")); ptitle += '...'; }; pdata.title = ptitle; } catch (e) { }
                    try { pdata.year = $(entry).find("updated").text().slice(0, 4); } catch (e) { }
                    try { pdata.jabb = 'arXiv.org'; } catch (e) { }
                    try {
                        var author = $(entry).find("author").text();
                        if (author.length > 100) { author = author.slice(0, 99); author = author.slice(0, author.lastIndexOf(";")); author += ', et al.'; }
                        pdata.author = author.replace('\n    \n', ';').replace('\n    \n', ';').replace('\n    \n', ';').replace(/\s+/g, ' ');
                    } catch (e) { }
                    for (var k in pdata) { sdata[k] = pdata[k]; utils.updatePanel(k, pdata[k]); }
                    base.setV('sdata', sdata);
                }
            });
            utils.updatePanel('web_arxiv', 'https://arxiv.org/abs/' + pid, rand);
            utils.updatePanel('pdf_arxiv', 'https://arxiv.org/pdf/' + pid, rand);
        },
        website(doi) {
            var rand = random;
            sdata.web_doi = tdata.cdoi + doi;
            sdata.web_scihub = scihub_link + '/' + doi;
            sdata.web_libgen = libgen_link + '/index.php?req=' + doi;
            utils.updatePanel('web_doi', sdata.web_doi, rand);
            utils.updatePanel('web_scihub', sdata.web_scihub, rand);
            utils.updatePanel('web_libgen', sdata.web_libgen, rand);
        }
    };

    let getPDF = {
        oabtn(doi) {
            var url = tdata.oabtn + doi, rand = random;
            $.getJSON(url, (res) => { if (res.url) { sdata.pdf_oabtn = res.url; base.setV('sdata', sdata); utils.updatePanel('pdf_oabtn', sdata.pdf_oabtn, rand); } });
        },
        scihub(doi, req) {
            var url = scihub_link + '/' + doi, rand = random;
            GM_xmlhttpRequest({
                method: "GET", url, onload: (res) => {
                    if (res.response) {
                        var pdfUrl = $(res.response).find("#pdf").attr("src");
                        if (pdfUrl) {
                            var pdf_url = pdfUrl.replace(/\.sci-hub\.(st|cat)/, ".sci-hub.se").replace(/moscow\.(ggws\.net|bban\.top)/, "zero.sci-hub.ru");
                            if (!pdf_url.match(/\/\//i)) { pdf_url = scihub_link + pdf_url; } else if (!pdf_url.match(/http/i)) { pdf_url = "http:" + pdf_url; };
                            if (req) {
                                $('a.pdf_scihub').attr('href', pdf_url);
                            } else {
                                sdata.pdf_scihub = pdf_url;
                                base.setV('sdata', sdata);
                                utils.updatePanel('pdf_scihub', sdata.pdf_scihub, rand);
                            }
                        } else { if (req) { $('a.pdf_scihub').remove(); if (!$(".wpdf a").length) $('.wPDF').remove(); } }
                    }
                }
            });
        },
        libgen(doi, req) {
            var url = libgen_link + '/ads.php?doi=' + doi, rand = random;
            GM_xmlhttpRequest({
                method: "GET", url, onload: (res) => {
                    if (res.response) {
                        var pdfUrl = res.response.match(/(\"get\.php[^\'\"]+)/);
                        if (pdfUrl) {
                            var pdf_url = libgen_link + pdfUrl[1].replace("\"", "/");
                            if (req) {
                                $('a.pdf_libgen').attr('href', pdf_url);
                            } else {
                                sdata.pdf_libgen = pdf_url;
                                base.setV('sdata', sdata);
                                utils.updatePanel('pdf_libgen', sdata.pdf_libgen, rand);
                            }
                        } else { if (req) { $('a.pdf_libgen').remove(); if (!$(".wpdf a").length) $('.wPDF').remove(); } }
                    }
                }
            });
        },
        lol(doi, req) {
            var url = tdata.lol + doi, rand = random;
            GM_xmlhttpRequest({
                method: "GET", url, onload: (res) => {
                    if (res.response) {
                        var pdfUrl = $(res.response).find("#download > h2 > a").attr("href");
                        if (pdfUrl) {
                            if (req) {
                                $('a.pdf_libgen').attr('href', url);
                            } else {
                                sdata.pdf_lol = url;
                                base.setV('sdata', sdata);
                                utils.updatePanel('pdf_lol', sdata.pdf_lol, rand);
                            }
                        } else { if (req) { $('a.pdf_lol').remove(); if (!$(".wpdf a").length) $('.wPDF').remove(); } }
                    }
                }
            });
        },
        OA(doi) {
            if (doi == getInfo.doi()) {
                var pdfUrl, rand = random;
                $("meta").each((i, e) => { if (e.name == "citation_pdf_url") { pdfUrl = e.content; return false; } });
                $("a").each((i, link) => {
                    if (/\/nature\/journal(.+?)\/pdf\/(.+?)\.pdf$/.test(link.href) || /\/articles\/nmicrobiol\d+\.pdf$/.test(link.href) || link.getAttribute("data-download-content") == "Article"
                    ) { pdfUrl = link.href; return false; }
                    if (myHost == "www.tandfonline.com" && /\/doi\/pdf\/10(.+?)needAccess=true$/i.test(link.href)) { pdfUrl = link.href; return false; }
                    if (myHost == "www.cdc.gov" && link.classList[0] == "noDecoration" && /\.pdf$/.test(link.href)) { pdfUrl = link.href; return false; }
                    if (myHost == "www.sciencedirect.com" && link.getAttribute("pdfurl")) { pdfUrl = link.getAttribute("pdfurl"); return false; }
                });
                var ieeePdf = base.runRegexOnDoc(/"pdfPath":"(.+?)\.pdf",/, "ieeexplore.ieee.org");
                if (ieeePdf) { pdfUrl = "https://ieeexplore.ieee.org" + ieeePdf + ".pdf"; }
                if (pdfUrl) {
                    $.get(pdfUrl, (res) => {
                        if (res.indexOf('<html') == -1) {
                            sdata.pdf_OA = pdfUrl;
                            base.setV('sdata', sdata);
                            utils.updatePanel('pdf_OA', pdfUrl, rand);
                        }
                    });
                }
            }
        }
    };

    let func = {
        tk(a, b) {
            if (b === undefined) return;
            var d = b.split("."); b = Number(d[0]) || 0;
            for (var e = [], f = 0, g = 0; g < a.length; g++) {
                var k = a.charCodeAt(g);
                128 > k ? e[f++] = k : (2048 > k ? e[f++] = k >> 6 | 192 : (55296 == (k & 64512) && g + 1 < a.length && 56320 == (a.charCodeAt(g + 1) & 64512) ? (k = 65536 + ((k & 1023) << 10) + (a.charCodeAt(++g) & 1023), e[f++] = k >> 18 | 240, e[f++] = k >> 12 & 63 | 128) : e[f++] = k >> 12 | 224, e[f++] = k >> 6 & 63 | 128), e[f++] = k & 63 | 128);
            }
            a = b; for (f = 0; f < e.length; f++)a = this.Fo(a + e[f], "+-a^+6");
            a = this.Fo(a, "+-3^+b+-f"); a ^= Number(d[1]) || 0;
            0 > a && (a = (a & 2147483647) + 2147483648); a %= 1E6;
            return a.toString() + "." + (a ^ b);
        },
        Fo(a, b) {
            for (var c = 0; c < b.length - 2; c += 3) {
                var d = b.charAt(c + 2);
                d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
                d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
                a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d;
            }
            return a;
        },
        caide(t) {
            function ee(t) { return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(t); }
            t = t.split("").map((t) => { return - 1 < ee(t) ? "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"[ee(t)] : t; }).join("");
            return base.d(t).toString();
        }
    };

    let upToken = {
        async bing() {
            var res = await base.get(tdata.bing + '/translator');
            kdata.ig = res.match(/IG:"([A-Za-z0-9]+)"/)[1];
            [, kdata.key, kdata.token] = res.match(/var params_RichTranslateHelper\s*=\s*\[([0-9]+),\s*"([^"]+)",[^\]]*\];/);
            kdata.iid = $(res).find("#rich_tta").attr("data-iid");
            base.setV("kdata", kdata);
        },
        async ali() {
            var csrf = await base.get(tdata.csrf);
            kdata.csrf = csrf.token;
            base.setV("kdata", kdata);
        },
        async bdt() {
            var res = await base.get(tdata.bdt);
            kdata.gtk = /window\.gtk = ['"](.*?)['"]/.exec(res)[1];
            kdata.btoken = /token: ['"](.*?)['"]/.exec(res)[1];
            base.setV("kdata", kdata);
        },
        async cai() {
            kdata.caid = CryptoJS.MD5(Math.random().toString()).toString();
            var data = { "browser_id": kdata.caid };
            var header = { "Content-Type": "application/json", "X-Authorization": "token:" + tdata.cait };
            var res = await base.post(tdata.cai + '/user/jwt/generate', data, header);
            kdata.jwt = res.jwt;
            base.setV("kdata", kdata);
        },
        all() {
            this.bing(); this.ali(); this.bdt(); this.cai(); base.setV("kdata_time", new Date().getTime());
        }
    };

    let utils = {
        getTransInfo(e, node, t_num) {
            if (e) {
                var tspan = document.createElement("span"), eng = odata.trans_engine, num = { "有道翻译": 600, "必应翻译": 2500 };
                $(tspan).addClass("translate_span").attr("value", ++t_num).text(" " + eng + "等待中... "); node.insertNode(tspan);
                if (e.length > 5e3) {
                    $(tspan).text(" 字数过多，翻译暂不可用，请减少字数重试...");
                } else {
                    if (!num[eng] || e.length < num[eng]) {
                        utils.getTransText(e, tspan);
                    } else {
                        $(tspan).text(" " + eng + "只能翻译" + num[eng] + "字符以内，请减少字数重试...");
                    }
                }
            } else { $(".translate_span[value=" + t_num + "]").remove(); }
        },
        async getTransText(e, node) {
            var tapi, url, data, header, sign, num = 0, res = "", resTxt = "", lang = (/[\u4E00-\u9FA5]/g.test(e) && !/[\u0800-\u4e00]/g.test(e)) ? "en" : "zh";
            tgoing = true; kdata = base.getV('kdata'); e = e.replace(/\r|\n|\r\n/g, ' ');
            switch (odata.trans_engine) {
                case "彩云小译": while (!resTxt.length && num < 2) {
                    data = { "source": e, "trans_type": "auto2" + lang, "detect": true, "browser_id": kdata.caid };
                    header = { "X-Authorization": "token:" + tdata.cait, "T-Authorization": kdata.jwt, "User-Agent": def.t_tua };
                    res = await base.post(tdata.cai + '/translator', data, header); resTxt = res.target ? func.caide(res.target) : '';
                    !resTxt.length && await upToken.cai(); num++;
                }; utils.transOutput("", node, resTxt); break;
                case "百度翻译": while (!resTxt.length && num < 2) {
                    var e_r = e.length > 30 ? (e.substr(0, 10) + e.substr(~~(e.length / 2) - 5, 10) + e.substr(-10)) : e;
                    data = `from=auto&to=${lang}&query=${base.encode(e)}&simple_means_flag=3&sign=${func.tk(e_r, kdata.gtk)}&token=${kdata.btoken}&domain=common`;
                    res = await base.post(tdata.bdt + '/v2transapi', data); resTxt = res.trans_result ? res.trans_result.data[0].dst : '';
                    !resTxt.length && await upToken.bdt(); num++;
                }; utils.transOutput("", node, resTxt); break;
                case "阿里翻译": while (!resTxt.length && num < 2) {
                    data = `srcLang=auto&tgtLang=${lang}&domain=general&_csrf=${kdata.csrf}&query=${base.encode(e)}`;
                    res = await base.post(tdata.ali, data); resTxt = res.data ? res.data.translateText : '';
                    !resTxt.length && await upToken.ali(); num++;
                }; utils.transOutput("", node, resTxt); break;
                case "必应翻译": while (!resTxt.length && num < 2) {
                    if (lang == "zh") lang = "zh-Hans"; url = `${tdata.bing}/ttranslatev3?isVertical=1&&IG=${kdata.ig}&IID=${kdata.iid}`;
                    data = `fromLang=auto-detect&to=${lang}&token=${kdata.token}&key=${kdata.key}&text=${base.encode(e)}`;
                    res = await base.post(url, data); resTxt = res[0] ? res[0].translations[0].text : '';
                    !resTxt.length && await upToken.bing(); num++;
                }; utils.transOutput("", node, resTxt); break;
                case "谷歌翻译":
                    tapi = Math.random() > 0.5 ? tdata.ggt : tdata.gmt; if (lang == "zh") lang = "zh-CN";
                    url = tapi + lang + "&q=" + base.encode(e); setTimeout(() => { tgoing = false; }, 3e3);
                    $.getJSON(url, (res) => { if (res) for (const i in res[0]) resTxt += res[0][i][0]; utils.transOutput("", node, resTxt); }); break;
                case "搜狗翻译":
                    utils.transOutput(tdata.sgt + base.encode(e), node, " ", "#trans-result"); break;
                default:
                    sign = CryptoJS.MD5(tdata.ticb + e.replace(/(^\s*)|(\s*$)/g, "")).toString().substring(0, 16);
                    data = `from=auto&t=${lang}&q=${base.encode(e)}`; res = await base.post(tdata.icb + sign, data);
                    resTxt = res.content ? res.content.out : ''; utils.transOutput("", node, resTxt); break;
            }
        },
        async transOutput(url, node, e, s) {
            if (url.length > 0) {
                var res = await base.get(url);
                if (res) e += $(res).find(s).text(); tgoing = false;
                e.length > 1 ? $(node).text(e + " ") : $(node).text(" 翻译暂不可用，请重新尝试，或者更换翻译引擎...");
            } else {
                tgoing = false; e.length > 0 ? $(node).text(" " + e + " ") : $(node).text(" 翻译暂不可用，请重新尝试，或者更换翻译引擎...");
            }
            setTimeout(() => { tgoing = false; }, 3e3);
        },
        getJourInfo(e) {
            e = e.replace(/\(.*\)/g, '').replace(/\d{4}/g, '').replace(/'\d{2}/g, '').replace(/\d+(th|nd|st|rd)/g, '');
            e = e.toLowerCase().replace(/&|&amp;/g, "and").replace(/Switzerland|basel|[-.,_—:;()，；（）《》<>\"\/\s]+/gi, "");
            if (jdata[e]) return jdata[e];
            for (var i in jdata) {
                let r = new Map;
                for (let t = 0; t < e.length - 1; t++) { const i = e.substring(t, t + 2), s = r.has(i) ? r.get(i) + 1 : 1; r.set(i, s); }
                let s = 0;
                for (let t = 0; t < i.length - 1; t++) { const e = i.substring(t, t + 2), n = r.has(e) ? r.get(e) : 0; 0 < n && (r.set(e, n - 1), s++); }
                if (2 * s / (e.length + i.length - 2) > 0.9) { return jdata[i]; }
            }
            return [0];
        },
        getCCFInfo(e) {
            e = e.replace(/\(.*\)/g, '').replace(/\d{4}/g, '').replace(/'\d{2}/g, '').replace(/\d+(th|nd|st|rd)/g, '');
            e = e.toLowerCase().replace(/&|&amp;/g, "and").replace(/Switzerland|basel|[-.,_—:;()，；（）《》<>\"\/\s]+/gi, "");
            if (ccfdata[e]) return ccfdata[e];
            return null;
        },
        getPaperInfo(pid, pid_type, refresh) {
            var temp = base.getV('sdata'); pdata = {}; sdata = {}; random = (Math.floor(Math.random() * 9e2) + 1e2).toString();
            $('#scihubcrx').attr("pid", pid).attr("pid-type", pid_type);
            $('.entryLink').addClass('TO' + random);
            $('.sotarget').text(pid_type + ": " + pid);
            if (!refresh && temp && (temp.doi == pid || temp.pmid == pid || temp.pmcid == pid || temp.arxiv == pid)) {
                for (var k in temp) utils.updatePanel(k, temp[k]);
            } else {
                switch (pid_type) {
                    case "DOI": getInfo.crossref(pid); break;
                    case "PMID": case "PMCID": getInfo.pubmed(pid); break;
                    case "arXiv": getInfo.arxiv(pid); break;
                }
            }
        },
        getRankInfo(node, jTitle, inner) {
            if (jTitle && jTitle.length > 0) {
                utils.getRankSpan(node, jTitle, inner);
            } else {
                for (const k in node) {
                    $(node[k]).each((i, e) => {
                        var jt = $("meta[name='citation_journal_title']").attr("content");
                        if (!jt || jt == '' || jt == 'undefined') { jt = $(e).text(); }
                        if (jt) utils.getRankSpan(e, jt, inner);
                    });
                }
            }
        },
        getRankSpan(node, jTitle, inner) {
            if (!$(node).attr("ranked")) {
                $(node).attr("ranked", "1");
                var rankDiv = document.createElement('div');
                $(rankDiv).addClass("rankdiv notranslate").attr("translate", "no");
                var rdata = utils.getJourInfo(jTitle);
                var ccfrank = utils.getCCFInfo(jTitle);
                for (const i in rdata) {
                    const v = rdata[i];
                    if (v) {
                        var rankSpan = document.createElement('span');
                        $(rankSpan).addClass("rankInfo");
                        switch (i) {
                            case "0": if (v) { $(rankSpan).addClass("color-if").text("IF " + v).attr("title", def.t_if); } break;
                            case "1": if (v) { $(rankSpan).addClass("color-" + v).text("Q" + v).attr("title", def.t_jcr); } break;
                            case "2": if (v) { $(rankSpan).addClass("color-" + v).text("B" + v).attr("title", def.t_cas); } break;
                            case "3": if (v) { $(rankSpan).addClass("color-1").text("Top").attr("title", def.t_top); } break;
                            case "4": if (v) { $(rankSpan).addClass("color-5").text("EI").attr("title", def.t_ei); } break;
                            case "5": if (v) { $(rankSpan).addClass("color-6").text("CSCD").attr("title", def.t_cscd); } break;
                            case "6": if (v) { $(rankSpan).addClass("color-7").text("北大核心").attr("title", def.t_pku); } break;
                            case "7": if (v) { $(rankSpan).addClass("color-8").text("CSSCI").attr("title", def.t_cssci); } break;
                            case "8": if (v) { $(rankSpan).addClass("color-4").text("卓越期刊").attr("title", def.t_zyqk); } break;
                            case "9": if (v) { var Ico = document.createElement('img'); $(Ico).addClass("wwarning").attr("src", warning_ico).attr("title", def.t_sos); $(rankSpan).append(Ico); } break;
                        }
                        $(rankDiv).append(rankSpan);
                    }
                }
                if (ccfrank) {
                    var rankSpan = document.createElement('span');
                    $(rankSpan).addClass("rankInfo");
                    $(rankSpan).css('background', '#ba131b').text("CCF " + ccfrank).attr("title", def.t_ccf);
                    $(rankDiv).append(rankSpan);

                }

                if (rdata.length > 1 || ccfrank) { if (inner) { $(node).append(rankDiv); } else { $(node).after(rankDiv); } }
            }
        },
        updatePanel(k, value, rand) {
            if (value) {
                switch (k) {
                    case "title": $(".eTitle").text(value).css("display", "flex"); break;
                    case "doi":
                        $(".eDOI a").attr("target", Target).attr("href", tdata.sciweb + value).text(value);
                        $(".eDOI .copyIcon").attr("src", copy_ico).attr("copyid", value);
                        $(".eDOI").css("display", "flex"); break;
                    case "pmid":
                        $(".ePMID a").attr("target", Target).attr("href", tdata.sciweb + value).text(value);
                        $(".ePMID .copyIcon").attr("src", copy_ico).attr("copyid", value);
                        $(".ePMID").css("display", "flex"); break;
                    case "pmcid":
                        $(".ePMCID a").attr("target", Target).attr("href", tdata.sciweb + value).text(value);
                        $(".ePMCID .copyIcon").attr("src", copy_ico).attr("copyid", value);
                        $(".ePMCID").css("display", "flex"); break;
                    case "jabb":
                        if (!$(".entryValue.sjournal").attr("title")) $(".entryValue.sjournal").attr("title", value);
                        $(".entryValue.sjournal").text(value);
                        $(".eJourrnal").css("display", "flex"); break;
                    case "journal":
                        if (!$(".entryValue.sjournal").text()) $(".entryValue.sjournal").text(value);
                        $(".entryValue.sjournal").attr("title", value);
                        $(".eJourrnal").css("display", "flex"); break;
                    case "issn": $(".entryValue.sissn").text(value); $(".eISSN").css("display", "flex"); break;
                    case "info":
                        for (const j in value) {
                            const v = value[j];
                            switch (j) {
                                case "0": if (v) { $("span.ccif").text(v).attr("title", def.t_if).css("display", "initial"); } break;
                                case "1": if (v) { $("span.cjcr").text("Q" + v).attr("title", def.t_jcr).addClass("color-" + v).css("display", "initial"); } break;
                                case "2": if (v) { $("span.ccas").text("B" + v).attr("title", def.t_cas).addClass("color-" + v).css("display", "initial"); } break;
                                case "3": if (v) { $("span.ctop").attr("title", def.t_top).css("display", "initial"); } break;
                                case "4": if (v) { $("span.ccei").attr("title", def.t_ei).css("display", "initial"); } break;
                                case "5": if (v) { $("span.cscd").attr("title", def.t_cscd).css("display", "initial"); } break;
                                case "6": if (v) { $("span.cpku").attr("title", def.t_pku).css("display", "initial"); } break;
                                case "7": if (v) { $("span.cssci").attr("title", def.t_cssci).css("display", "initial"); } break;
                                case "8": if (v) { $("span.czyqk").attr("title", def.t_zyqk).css("display", "initial"); } break;
                                case "9": if (v) { $("img.cwarning").attr("src", warning_ico); $("span.csos").attr("title", def.t_sos).css("display", "initial"); } break;
                            }
                            if (v) $(".eInfo").css("display", "flex");
                        }
                        break;
                    case "publisher": $(".entryValue.spublisher").text(value); $(".ePublisher").css("display", "flex"); break;
                    case "author": $(".entryValue.sauthor").text(value); $(".eAuthor").css("display", "flex"); break;
                    case "year": $(".entryValue.syear").text(value); $(".eYear").css("display", "flex"); break;
                    case "cited": $(".entryValue.scited").text(value); $(".eCited").css("display", "flex"); break;
                    case "web_doi": case "web_scihub": case "web_libgen": case "web_cross": case "web_pmid": case "web_arxiv":
                        var web_ico, web_title;
                        if (k == "web_doi") { web_ico = doi_ico; web_title = "DOI Website"; }
                        if (k == "web_scihub") { web_ico = pdf_scihub_ico; web_title = "SciHub Website"; }
                        if (k == "web_libgen") { web_ico = pdf_libgen_ico; web_title = "Libgen Website"; }
                        if (k == "web_cross") { web_ico = crossref_ico; web_title = "Crossref Website"; }
                        if (k == "web_arxiv") { web_ico = arxiv_ico; web_title = "arXiv Website"; }
                        if (k == "web_pmid") { web_ico = pmid_ico; web_title = "Pubmed Website"; }
                        var web_html = `<a href="${value}" class="${k}" title="${web_title}" target="${Target}"><img class="weblink" src="${web_ico}"></a>`;
                        rand = rand ? '.entryLink.eWeb.TO' + rand : '.entryLink.eWeb'; $(rand).append(web_html); $(".wcard.eWebsite").css("display", "flex"); break;
                    case "pdf_scihub": case "pdf_OA": case "pdf_libgen": case "pdf_lol": case "pdf_oabtn": case "pdf_oadoi": case "pdf_pmcid": case "pdf_arxiv":
                        var pdf_ico, pdf_title;
                        if (k == "pdf_scihub") { pdf_ico = pdf_scihub_ico; pdf_title = "SciHub PDF"; }
                        if (k == "pdf_OA") { pdf_ico = pdf_OA_ico; pdf_title = "OA PDF"; }
                        if (k == "pdf_lol") { pdf_ico = pdf_lol_ico; pdf_title = "LoL PDF"; }
                        if (k == "pdf_libgen") { pdf_ico = pdf_libgen_ico; pdf_title = "Libgen PDF"; }
                        if (k == "pdf_oabtn") { pdf_ico = pdf_oabtn_ico; pdf_title = "OA Button PDF"; }
                        if (k == "pdf_oadoi") { pdf_ico = pdf_oadoi_ico; pdf_title = "UnpayWall PDF"; }
                        if (k == "pdf_pmcid") { pdf_ico = pmcid_ico; pdf_title = "Pubmed PDF"; }
                        if (k == "pdf_arxiv") { pdf_ico = arxiv_ico; pdf_title = "arXiv PDF"; }
                        var pdf_html = `<a href="${value}" class="${k}" title="${pdf_title}" target="${Target}"><img class="pdflink" src="${pdf_ico}"></a>`;
                        rand = rand ? '.entryLink.eFile.TO' + rand : '.entryLink.eFile'; $(rand).append(pdf_html); $(".wcard.ePDF").css("display", "flex"); break;
                }
            }
        }
    };

    let start = {
        addLinkByID() {
            try {
                start.replaceByElement(document.body, def.mDOI, (match) => {
                    var link = document.createElement('a');
                    link.href = tdata.doi + match[0];
                    link.appendChild(document.createTextNode(match[0]));
                    return link;
                });
                start.replaceByElement(document.body, def.mPMCID, (match) => {
                    var link = document.createElement('a');
                    link.href = tdata.pmcid + match[0];
                    link.appendChild(document.createTextNode(match[0]));
                    return link;
                });
                start.replaceByElement(document.body, def.mArXiv, (match) => {
                    var link = document.createElement('a');
                    link.href = tdata.arxiv + match[0].replace("arXiv:", "");
                    link.appendChild(document.createTextNode(match[0]));
                    return link;
                });
            } catch (e) { }
        },
        replaceByElement(element, find, replace) {
            var unTags = ["A", "BUTTON", "INPUT", "SCRIPT", "SELECT", "STYLE", "TEXTAREA"];
            for (var i = element.childNodes.length - 1; i >= 0; i--) {
                var child = element.childNodes[i];
                if (child.nodeType === Node.ELEMENT_NODE) {
                    if (unTags.indexOf(child.nodeName) < 0 && !$(child).is('#scihubcrx')) {
                        start.replaceByElement(child, find, replace);
                    } else if (child.nodeName === "A") {
                        if (def.mDOIURL.test(child.href)) { child.href = child.href.replace(def.mDOIURL, tdata.doi + "$1"); }
                    }
                } else if (child.nodeType === Node.TEXT_NODE) { start.replaceByText(child, find, replace); }
            }
        },
        replaceByText(text, find, replace) {
            var match, matches = [];
            while (match = find.exec(text.data)) { matches.push(match); }
            for (var i = matches.length; i-- > 0;) {
                match = matches[i];
                text.splitText(match.index);
                text.nextSibling.splitText(match[0].length);
                text.parentNode.replaceChild(replace(match), text.nextSibling);
            }
        },
        addFloatIco() {
            var predoi = getInfo.doi();
            if (predoi) {
                var floatIco = document.createElement('div');
                floatIco.id = 'floatInfoIco';
                floatIco.innerHTML = `<span class="paper-info" title="点击查看文章详细信息 DOI: ${predoi}" paper_id="${predoi}" paper_id_type="DOI"><img class="floatIco" src="${pdf_scihub_ico}"></span>`;
                document.body.appendChild(floatIco);
                if (odata.float_open) $('body').append(tdata.pContainer);
                utils.getPaperInfo(predoi, "DOI");
                // if (base.getV("newVersion")) { alert("SciHub CRX 发现新版本，请及时更新脚本！"); GM_openInTab(base.getV("newVersion"), { active: true }); base.delV("newVersion") }
            }
        },
        addRankIco() {
            if (odata.rank_open) {
                var e, v, jt, myHref = location.href;
                if (base.t(/iop\.org/)) {
                    e = [".publication-title a"]; utils.getRankInfo(e);
                    $(".publication-title a img").each((i, e) => { jt = $(e).attr("alt"); if (jt) utils.getRankInfo(e, jt); });
                } else if (base.t(/scitation\.org/)) {
                    e = [".header-journal-img-pt a", ".header-journal-title a", ".meta-article a:first-child"]; utils.getRankInfo(e);
                } else if (base.t(/publishing\.aip\.org/)) {
                    e = [".nav-article-meta__list li:nth-child(2) > a"]; utils.getRankInfo(e);
                } else if (base.t(/frontiersin\.org/)) {
                    e = [".header-bar-one h2", "div.source span:first-child", "h1.MainHeader__title"]; utils.getRankInfo(e);
                } else if (base.t(/journals\.aps\.org/)) {
                    e = ["h2.title a"]; utils.getRankInfo(e);
                } else if (base.t(/geoscienceworld/)) {
                    e = ["div.ww-citation-primary", "div.al-article-box > div:nth-child(5) a"]; utils.getRankInfo(e);
                } else if (base.t(/academic\.oup\.com/)) {
                    e = [".al-citation-list span em", ".ww-citation-primary em"]; utils.getRankInfo(e);
                } else if (base.t(/mdpi\.com/)) {
                    e = ["div.journal__description > h1 > em"]; utils.getRankInfo(e);
                    $("div.article-icons").each((i, e) => { jt = $(e).parent().find("div.color-grey-dark em:first-child").text(); if (jt) { utils.getRankInfo(e, jt); } else { jt = $("div.content__container > a > img").attr("title"); if (jt) utils.getRankInfo(e, jt); } });
                } else if (base.t(/orcid\.org/)) {
                    e = ["app-work div.general-data:first-child"]; utils.getRankInfo(e, '', true);
                } else if (base.t(/semanticscholar/)) {
                    e = ["li.paper-meta-item:nth-child(4) > span", ".cl-paper-venue"]; utils.getRankInfo(e);
                } else if (base.t(/scimagojr\.com/)) {
                    e = ["span.jrnlname", ".journaldescription > h1"]; utils.getRankInfo(e, '', true);
                } else if (base.t(/journals\.plos\.org/)) {
                    e = ["h1#artTitle", "dd > p span:nth-child(3)"]; utils.getRankInfo(e);
                } else if (base.t(/science\.org/)) {
                    e = ["div.card-meta > span:nth-child(2)", "div.core-self-citation > div:first-child > span"]; utils.getRankInfo(e);
                } else if (base.t(/annualreviews/)) {
                    e = ["div.text > p > em", "div.journal-issue > p > strong"]; utils.getRankInfo(e);
                } else if (base.t(/sapub\.org/) || base.t(/nature\.com/)) {
                    e = ["div.u-text-bold", "p.c-article-info-details a:first-child"]; utils.getRankInfo(e);
                } else if (base.t(/worldscientific/)) {
                    e = [".citation__title", "div.meta__details a"]; utils.getRankInfo(e);
                } else if (base.t(/doaj\.org/)) {
                    e = ["header>h1", "h3.search-results__heading a"]; utils.getRankInfo(e);
                } else if (base.t(/biomedcentral\.com/)) {
                    e = [".c-listing__content > div >em", ".c-article-info-details a:first-child", "span.c-journal-title__text"]; utils.getRankInfo(e);
                } else if (base.t(/hindawi\.com/)) {
                    e = [".article-card-header li:first-child", "h1.articleHeader__title"]; utils.getRankInfo(e, '', true);
                } else if (base.t(/journals\.sagepub\.com/)) {
                    e = [".issue-item__journal>span:first-child", ".core-container h1", "h1.banner-widget__heading a"]; utils.getRankInfo(e);
                } else if (base.t(/pubs\.rsc\.org/)) {
                    e = [".list__item-label h3"]; utils.getRankInfo(e);
                } else if (base.t(/pubs\.acs\.org/)) {
                    e = ["h1.article_header-title > span:first-child", "span.issue-item_jour-name"]; utils.getRankInfo(e);
                } else if (base.t(/onlinelibrary\.wiley\.com/)) {
                    e = ["h1.citation__title", "a.publication_meta_serial"]; utils.getRankInfo(e);
                } else if (base.t(/tandfonline\.com/)) {
                    e = [".publication-meta .hlFld-Title", "h1.journal-heading > a"]; utils.getRankInfo(e);
                } else if (base.t(/ieeexplore\.ieee\.org/)) {
                    e = [".description > a"]; utils.getRankInfo(e);
                    $("h1.document-title > span:first-child").each((i, e) => { jt = $("a.stats-document-abstract-publishedIn").text(); if (jt) utils.getRankInfo(e, jt); });
                } else if (base.t(/scopus\.com/)) {
                    e = [".text-meta span.text-meta", ".searchArea > td:nth-child(5)"]; utils.getRankInfo(e, '', true);
                } else if (base.t(/webofscience/)) {
                    $("a.summary-source-title-link").each((i, e) => { $(e).css({ "margin-right": "-13px" }); jt = $(e).text(); if (jt) utils.getRankInfo(e, jt); });
                } else if (base.t(/engineeringvillage/)) {
                    e = ["span.source-info", "span.ev__sourcetitle:nth-child(1)"]; utils.getRankInfo(e);
                } else if (base.t(/cnki(\.|-|_)(net|com)/)) {
                    $("td.name").each((i, e) => { jt = $(e).parent().find(".source").text(); if (jt) utils.getRankInfo(e, jt, true); });
                    $("p.source > a:nth-child(2)").each((i, e) => { jt = $(e).find("span").attr("title"); if (jt) utils.getRankInfo(e, jt); });
                } else if (base.t(/cqvip\.com/)) {
                    e = [".detailtitle h1 a"]; utils.getRankInfo(e);
                } else if (base.t(/readpaper/)) {
                    e = [".desc > div:nth-child(3) > div:first-child", ".venues-wrap > span"]; utils.getRankInfo(e);
                } else if (base.t(/springer/)) {
                    e = [".c-article-info-details > a:first-child"]; utils.getRankInfo(e);
                    $("a.publication-title").each((i, e) => { jt = $(e).attr("title"); if (jt) utils.getRankInfo(e, jt); });
                } else if (base.t(/sciencedirect/)) {
                    e = [".publication-volume h2", ".srctitle-date-fields span.anchor-text"]; utils.getRankInfo(e);
                } else if (base.t(/x-mol\.com/)) {
                    e = ["em.it-blue", "a.itsmblue > em"]; utils.getRankInfo(e);
                } else if (base.t(/xueshu\.baidu\.com/)) {
                    e = ["a.journal_title", ".sc_message > a:last-child"]; utils.getRankInfo(e);
                    $("h3.t a").each((i, e) => { jt = $(e).parent().parent().find(".sc_info > span:nth-child(2) > a").attr("title"); if (jt) utils.getRankInfo(e, jt, true); });
                } else if (base.t(/ncbi\.nlm\.nih\.gov/)) {
                    $("a.docsum-title").each((i, e) => {
                        v = $(e);
                        if (!v.attr("ranked")) {
                            var doi = def.mDOI.exec(v.parent().find("span.full-journal-citation").text());
                            if (doi && doi[1]) {
                                var url = tdata.unpaywall + doi[1] + "?email=unpaywall@impactstory.org";
                                $.getJSON(url, (res) => { if (res) try { jt = res.journal_name.replace("&amp;", "&").replace("—", "-"); if (jt) utils.getRankInfo(e, jt, true); } catch (e) { } });
                            }
                        }
                    });
                    $("h1.heading-title").each((i, e) => {
                        v = $(e);
                        if (!v.attr("ranked")) {
                            var doi1 = v.parent().find(".citation-doi > a").text();
                            if (doi1) {
                                var url = tdata.unpaywall + doi1 + "?email=unpaywall@impactstory.org";
                                $.getJSON(url, (res) => { if (res) try { jt = res.journal_name.replace("&amp;", "&").replace("—", "-"); if (jt) utils.getRankInfo(e, jt, true); } catch (e) { } });
                            }
                        }
                    });
                } else if (base.t(/(google|panda321|lanfanshu|dailyheadlines|lsqwl|scholar.mirrors)\./)) {
                    if (base.t(/(\/scholar\?|\/scholar_)/)) {
                        $(".gs_ri>h3>a").each((i, e) => {
                            v = $(e);
                            if (!v.attr("ranked")) {
                                var jta = v.parent().parent().find("div.gs_a").text();
                                var jtb = /(?:- )(.*?)(?:, \d{4})/g.exec(jta);
                                if (jtb != undefined && jtb[1].indexOf("…") == -1) {
                                    utils.getRankInfo(e, jtb[1]);
                                } else {
                                    var url = tdata.unpaywall + "search?email=unpaywall@impactstory.org&query=" + v.text().trim();
                                    $.getJSON(url, (res) => { if (res.results[0]) { try { jt = res.results[0].response.journal_name.replace("&amp;", "&").replace("—", "-"); if (jt) utils.getRankInfo(e, jt); } catch (e) { } } });
                                }
                            }
                        });
                    } else if (myHref.indexOf("/citation") > 0) {
                        $("tr.gsc_a_tr .gs_gray").each((i, e) => { jt = $(e).text().replace(/\s+|\d+|-|\(|\)|,/g, ""); if (jt) utils.getRankInfo(e, jt, true); });
                        $(".gsc_oci_value").each((i, e) => { jt = $(e).text(); if (jt) utils.getRankInfo(e, jt, true); });
                    }
                }
            }
        },
        addPinfoIco() {
            if (base.t(/(google|panda321|lanfanshu|dailyheadlines|lsqwl|scholar.mirrors)\./)) {
                var gg = [".gs_ri>h3>a", "tr.gsc_a_tr .gsc_a_at", ".gsc_oci_title_link"];
                for (const k in gg) {
                    $(gg[k]).each((i, e) => {
                        if (!$(e).attr("pcked")) {
                            $(e).attr("pcked", "1");
                            var url = tdata.unpaywall + "search?email=unpaywall@impactstory.org&query=" + $(e).text().trim();
                            $.getJSON(url, (res) => { if (res.results[0]) { try { var gdoi = {}; gdoi[1] = gdoi[2] = res.results[0].response.doi; if (gdoi) start.addPinfoSpan(gdoi, "DOI", e); } catch (e) { } } });
                        }
                    });
                }
            } else {
                var pid, plink, pClink = $(".pContent a"); link = $("a");
                for (var i = link.length; i-- > 0;) {
                    var conti = true;
                    plink = decodeURIComponent(link[i].href.replace(/%2F/gi, '/').replace(/%/g, '%25').replace('/metrics', ''));
                    for (const k in pClink) { if (link[i] == pClink[k]) { conti = false; break; } }
                    if (conti && !$(link[i]).attr("pcked")) {
                        $(link[i]).attr("pcked", "1");
                        if (site.indexOf('sci.sssam.com') == -1) {
                            if (/(sci-hub\..*|org|full|articles?|doi|\/abs)\/(10\.\d{4,9}\/[-._;()<>/:0-9a-zA-Z]+)/i.test(plink)) {
                                pid = /(10\.\d{4,9}\/[-._;()<>/:0-9a-zA-Z]+)(.*)/i.exec(plink); start.addPinfoSpan(pid, "DOI", link[i]);
                            } else if (def.mPMCIDURL.test(plink)) {
                                pid = /pmc(\d{5,8})(.*)/i.exec(plink); pid[1] = "PMC" + pid[1]; start.addPinfoSpan(pid, "PMCID", link[i]);
                            } else if (def.mPMIDURL.test(plink)) {
                                pid = /\/(\d{5,8})(.*)/i.exec(plink); start.addPinfoSpan(pid, "PMID", link[i]);
                            } else if (/&db=PubMed/i.test(plink)) {
                                pid = /uids=(\d{5,8})(.*)/i.exec(plink); start.addPinfoSpan(pid, "PMID", link[i]);
                            } else if (def.mArXivURL.test(plink)) {
                                pid = /\/(\d{4}\.\d{4,5}[v\d+]*)(.*)/i.exec(plink); start.addPinfoSpan(pid, "arXiv", link[i]);
                            }
                        } else {
                            if ($(link[i]).hasClass('pdf_scihub')) { pid = /(10\.\d{4,9}\/[-._;()<>/:0-9a-zA-Z]+)(.*)/i.exec(plink)[1]; getPDF.scihub(pid, true); }
                            if ($(link[i]).hasClass('pdf_libgen')) { pid = /(10\.\d{4,9}\/[-._;()<>/:0-9a-zA-Z]+)(.*)/i.exec(plink)[1]; getPDF.libgen(pid, true); }
                            if ($(link[i]).hasClass('pdf_lol')) { pid = /(10\.\d{4,9}\/[-._;()<>/:0-9a-zA-Z]+)(.*)/i.exec(plink)[1]; getPDF.lol(pid, true); }
                        }
                    }
                }
            }
        },
        addPinfoSpan(pid, pid_type, documentId) {
            var conti = true;
            for (var k = 1; k <= 2; k++) { if (/#|&|\?|\/figure|\/table/.test(pid[k]) || /(\.|\/)(pdf|doc|xls|ppt|htm|txt|xml|csv|js|meta)/.test(pid[k].slice(-10))) conti = false; }
            if (conti) {
                var downSpan = document.createElement('span');
                $(downSpan).addClass("paper-info").attr("title", pid_type + ": " + pid[1]).attr("paper_id", pid[1]).attr("paper_id_type", pid_type);
                documentId.parentNode.insertBefore(downSpan, documentId.nextSibling);
                var downIco = document.createElement('img');
                $(downIco).addClass("downBtnImg").attr("src", pdf_scihub_ico);
                downSpan.appendChild(downIco);
            }
        },
        initSciCRX() {
            base.initConfig();
            base.getBaseURL();
            base.addInitStyle();
            base.registerMenu();
            base.pageListener();
        }
    };
    let main = {
        init() {
            start.initSciCRX();
            if (!$.isEmptyObject(tdata)) {
                start.addFloatIco();
                setInterval(() => {
                    start.addRankIco();
                    start.addLinkByID();
                    start.addPinfoIco();
                }, 1e3);
            }
        }
    };
    main.init();
})();