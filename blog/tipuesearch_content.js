var tipuesearch = {"pages":[{"tags":"misc","title":"About","text":"2017Spring 機械設計工程系協同產品設計實習 課程倉儲: http://github.com/mdecourse/2017springcd 課程投影片: http://mdecourse.github.io/2017springcd 課程網誌: http://mdecourse.github.io/2017springcd/blog","url":"./pages/about/"},{"tags":"Course","title":"20170412第八週","text":"囧","url":"./Week 8.html"},{"tags":"Course","title":"20170405第七週","text":"囧","url":"./Week 7.html"},{"tags":"Course","title":"20170329第六週","text":"Fourbar 安裝 by Onshape Onshape繪製fourbar from 40423241黃鈺灃 on Vimeo . Fourbar 運動模擬 by V-rep fourbar(Onshape轉V-rep) from 40423241黃鈺灃 on Vimeo . 解決倉儲推送出現問題 解決的辦法, 一樣刪除 plugin 下的 liquid_tags 目錄","url":"./Week 6.html"},{"tags":"Course","title":"20170322第五週","text":"單連桿(SolveSpace轉V-rep) 單連桿(SolveSpace轉V-rep)-學生版 from 40423241黃鈺灃 on Vimeo . Fossil SCM 與 Stunnel 啟動整合 1. 更改 Start.bat 設定 REM tiny2017 主要針對初學 Python3 與 C 學員所建立 REM 近端使用 fossil 管理資料版本, 並且定時轉為 git 格式後上傳到 github @echo off REM 設定 y 硬碟代號與 data 目錄對應 set Disk=y subst %Disk%: \"data\" REM 設定 leo 相關對應 Home 位置 set HomePath=%Disk%:\\home set HomeDrive=%Disk%:\\home set Home=%Disk%:\\home REM 將系統 Python 程式的 io 設為 utf-8 set PYTHONIOENCODING=\"utf-8\" REM 將後續的指令執行, 以 %Disk% 為主 %Disk%: REM 設定 PYTHONPATH set PYTHONPATH=%Disk%:\\python-3.5.3-embed-amd64 REM 設定 Leo 所用的編輯器 set LEO_EDITOR=%Disk%:\\wscite\\SciTE.exe REM for fossil https 連線設定 set HTTPS=on REM 指令搜尋路徑設定 set path1=%PATH%;%Disk%:;%Disk%:\\python-3.5.3-embed-amd64;%Disk%:\\git\\bin;%Disk%:\\stunnel\\bin;%Disk%:\\sqlite-tools;%Disk%:\\python-3.5.3-embed-amd64\\Scripts;%Disk%:\\portablegit\\bin; set path2=c:\\Windows\\Microsoft.NET\\Framework\\v3.5;%Disk%:\\python-3.5.3-embed-amd64\\Lib\\site-packages; set path3=\"C:\\Program Files (x86)\\Google\\Chrome\\Application\" path=%path%;%path1%;%path2%;%path3% start /MIN %Disk%:\\wscite\\SciTE.exe start /MIN cmd.exe start /MIN cmd.exe start /MIN cmd.exe REM 啟動 Leo 編輯器 REM %Disk%:\\Miniconda3\\python.exe %Disk%:\\apps\\launchLeo.py REM 啟動 stunnel start /MIN fossil.exe server -P 127.0.0.1:8080 %Disk%:\\tmp\\fossil_repo\\2017springcd_bg1.fpssil REM 取得電腦 IP, 然後設定 %Disk%:/stunnel/config/stunnel.conf for /f \"delims=[] tokens=2\" %%a in ('ping -4 -n 1 %ComputerName% &#94;| findstr [') do set NetworkIP=%%a REM echo Network IP: %NetworkIP% REM Saved in %Disk%:\\stunnel\\config\\stunnel.conf @echo off REM 建立 stunnel.conf @echo [https] > %Disk%:\\stunnel\\config\\stunnel.conf REM 附加資料 @echo accept = %NetworkIP%:443 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo connect = 127.0.0.1:8080 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo TIMEOUTclose = 0 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo cert = %Disk%:\\stunnel\\config\\localhost.crt >> %Disk%:\\stunnel\\config\\stunnel.conf @echo key = %Disk%:\\stunnel\\config\\localhost.key >> %Disk%:\\stunnel\\config\\stunnel.conf REM 啟動 stunnel start /MIN stunnel.exe REM 以 chrome 連線到 https://%NetworkIP%:443 chrome https://%NetworkIP% https://mde2a2.kmol.info/cdbg1 Exit 2. 檢查是否有相對應的 fossil 檔案 start /MIN fossil.exe server -P 127.0.0.1:8080 %Disk%:\\tmp\\fossil_repo\\2017springcd_bg1.fpssil 3. 自己額外在最後一行, 新增一個小組 fpssil 網址 https://mde2a2.kmol.info/cdbg1 建立與 project name 同名的首頁 wiki https://mde2a2.kmol.info/cdbg1 心得:","url":"./Week 5.html"},{"tags":"Course","title":"20170315第四週","text":"單連桿阻立 單連桿阻立 from 40423241黃鈺灃 on Vimeo . 單桿機構 單連桿-1 單連桿-1 from 40423241黃鈺灃 on Vimeo . 單連桿-2 單連桿-2 from 40423241黃鈺灃 on Vimeo . 單連桿-3 單連桿-3 from 40423241黃鈺灃 on Vimeo .","url":"./Week 4.html"},{"tags":"Course","title":"20170308第三週","text":"Fourbar組裝 by SolveSpace fourbar組裝 from 40423241 on Vimeo . Fourbar組裝 by Onshape fourbar組裝 from 40423241 on Vimeo . Fourbar-30mm by SplveSpace 30mm by SolveSpace from 40423241 on Vimeo . Fourbar-50mm by SplveSpace 50mm by SolveSpace from 40423241 on Vimeo . Fourbar-60mm by SplveSpace 60mm by SolveSpace from 40423241 on Vimeo . Fourbar-30mm by Onshape 30mm by Onshape from 40423241 on Vimeo . Fourbar-50mm by Onshape 50mm by Onshape from 40423241 on Vimeo . Fourbar-60mm by Onshape 60mm by Onshape from 40423241 on Vimeo . by Onshape 心得:利用Onshape與Solvespace完成四連桿機構組裝，小組作業分工合作，真的很棒。","url":"./Week 3.html"},{"tags":"Course","title":"20170301第二週","text":"Fourbar 利用Solvespace 畫出簡單的四連桿機構, 觀察該機構的運動方式 Fourbar from 40423241 on Vimeo . 2017springvcp_hw 2017springvcp_hw from 40423241 on Vimeo . 分組座位原始碼 #import os adata = open(\"w2b_cadlab.txt\", encoding=\"utf-8\").read() #讀取w2b_cadlab.txt 檔案,讓裡面的內容成為資料, 因為檔案裡有中文, 所以設定encoding 使用utf-8 的編驛碼 rdata = open(\"w2b_registered.txt\", encoding=\"utf-8\").read().splitlines() #print(adata) #用print 先檢查資料是否是我們需要的 alist = adata.splitlines() #利用splitlines 的方法把資料隔開, 就可以得到一個特定的數列 #print(alist[2]) n = 0 row = 0 final_list = [] w2_list = [] for stud_num in alist[2:]: #從第2列開始, 因為第0列和第1列都不是我們要的 row = row + 1 blist = stud_num.split(\"\\t\") #print(blist) column = 0 #為了避免序號連續, 利用column = 0 將順序重製, 因為每一列算完之後要換下一列重新開始 for i in range(len(blist)): column = column + 1 if blist[i] != \"\": #print(blist[i]) clist = blist[i].split(\"_\") stud_data = clist[0]+\"_\"+clist[1]+\"_\"+str(row)+\"_\"+str(column) final_list.append(stud_data) w2_list.append(clist[1]) n = n +1 # 根據數列前導字串排序, 目的在建立分組數列 group_list = sorted(final_list) print(\"分組名單:\") for i in range(len(group_list)): print(group_list[i]) print(\"座位列表:\") for i in range(len(final_list)): print(final_list[i]) for i in range(len(rdata)): if rdata[i] not in w2_list: print(\"缺席學生:\", rdata[i]) print(\"學生總數:\", n) #print(os.environ) 心得:協同真的很棒，小組成員各個同心協力完成作業，真的很棒","url":"./Week 2.html"},{"tags":"Course","title":"20170222第一週","text":"修改stunnel.conf的IP設定 設置IP from 40423241 on Vimeo . 心得:第一週上課好開心，老師教了好多東西，查IP指令ipconfig /all。","url":"./Week 1.html"}]};