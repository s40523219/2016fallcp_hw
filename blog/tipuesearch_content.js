var tipuesearch = {"pages":[{"title":"About","tags":"misc","text":"2016Fall 計算機程式課程網誌 本課程主要教導機械設計工程系大一學生下列內容: 如何利用 Github 管理電腦檔案. 如何利用 Python3 與 Brython 程式處理檔案資料. 如何利用 Brython 程式進行網際靜態與動態繪製. 課程倉儲: http://github.com/mdecourse/2016fallcp 課程投影片: http://mdecourse.github.io/2016fallcp 課程網誌: http://mdecourse.github.io/2016fallcp/blog","url":"./pages/about/"},{"title":"W14 Brython 開始練習","tags":"Course","text":"Brython 開始練習 導入程式庫, 啟動 window.onload=function(){ brython(1); }","url":"./w14-brython-kai-shi-lian-xi.html"},{"title":"W13 Brython 繪圖練習","tags":"Course","text":"Brython 繪圖 繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math canvas = doc[\"chord1\"] ctx = canvas.getContext(\"2d\") def canvasText(x, y, fontSize, string, sup, sub, color, ctx): ctx.beginPath() ctx.fillStyle = color ctx.strokeStyle = color #ctx.font = \"20px Arial\" ctx.font = str(fontSize)+ \"px Arial\" ctx.fillText(string, x, y) ctx.font = str(fontSize-8)+ \"px Arial\" if sup != \"\": ctx.fillText(sup, x+fontSize/1.6, y-fontSize/2) if sub != \"\": ctx.fillText(sup, x+fontSize/1.6, y) ctx.fill() ctx.stroke() ctx.closePath() # 設法利用運算印出吉他各把位的音名 def doreme(x, y, fontSize, order, ctx): # 讓音名數列可以每 12 音名後, 升高 key 後從頭開始 if order > 12: order = order % 12 if order == 1: canvasText(x, y, fontSize, \"A\", \"\", \"\", \"black\", ctx) elif order ==2: canvasText(x, y, fontSize, \"B\", \"b\", \"\", \"red\", ctx) elif order == 3: canvasText(x, y, fontSize, \"B\", \"\", \"\", \"black\", ctx) elif order == 4: canvasText(x, y, fontSize, \"C\", \"\", \"\", \"black\", ctx) elif order == 5: canvasText(x, y, fontSize, \"D\", \"b\", \"\", \"red\", ctx) elif order == 6: canvasText(x, y, fontSize, \"D\", \"\", \"\", \"black\", ctx) elif order == 7: canvasText(x, y, fontSize, \"E\", \"b\", \"\", \"red\", ctx) elif order == 8: canvasText(x, y, fontSize, \"E\", \"\", \"\", \"black\", ctx) elif order == 9: canvasText(x, y, fontSize, \"F\", \"\", \"\", \"black\", ctx) elif order == 10: canvasText(x, y, fontSize, \"G\", \"b\", \"\", \"red\", ctx) elif order == 11: canvasText(x, y, fontSize, \"G\", \"\", \"\", \"black\", ctx) elif order == 12: canvasText(x, y, fontSize, \"A\", \"b\", \"\", \"red\", ctx) else: canvasText(x, y, fontSize, \"A\", \"b\", \"\", \"red\", ctx) def background(x, y, xinc, yinc, xnum, ynum, ctx): # 水平線 for i in range(ynum+1): ctx.beginPath() if i == 0: ctx.lineWidth = 7 else: ctx.lineWidth = 1 ctx.moveTo(x-1, y+i*yinc) ctx.lineTo(x+xnum*xinc+1, y+i*yinc) ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 垂直線 for i in range(xnum+1): ctx.beginPath() ctx.lineWidth = 1 ctx.moveTo(x+i*xinc, y) ctx.lineTo(x+i*xinc, y+ynum*yinc) ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 標定各弦音符號, 以及把位編號 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.font = \"20px Arial\" sixString = [\"E\", \"A\", \"D\", \"G\", \"B\", \"E\"] stringNum = 0 for i in sixString: ctx.fillText(i, x-7+stringNum*xinc, y-15) stringNum = stringNum + 1 num = 1 for j in range(1,20,1): ctx.fillText(j,15,95+num*yinc) num = num + 1 ctx.fill() ctx.stroke() ctx.closePath() firstBar = [8, 1, 6, 11, 3, 8] for j in range(19): fontSize = 15 for k in range(6): bx = x + (k)*w - fontSize/3 by = y + (j)*h+h/2 + fontSize/2 order = firstBar[k] + j + 1 doreme(bx, by, fontSize, order, ctx) w = 20 h = 25 background(50, 100, w, h, 5, 19, ctx)","url":"./w13-brython-hui-tu-lian-xi.html"},{"title":"W11 Brython 繪圖練習","tags":"Course","text":"Brython 繪圖 繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"chord1\"] ctx = canvas.getContext(\"2d\") def background(x, y, xinc, yinc, xnum, ynum, ctx): # 水平 for i in range(ynum+1): ctx.beginPath() if i == 0: ctx.lineWidth = 7 else: ctx.lineWidth = 1 ctx.moveTo(x-1, y+i*yinc) ctx.lineTo(x+xnum*xinc+1, y+i*yinc) ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 垂直 for i in range(xnum+1): ctx.beginPath() ctx.lineWidth = 1 ctx.moveTo(x+i*xinc, y) ctx.lineTo(x+i*xinc, y+ynum*yinc) ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() background(50, 100, 20, 25, 5, 4, ctx) background(250, 100, 20, 25, 5, 4, ctx) background(450, 100, 20, 25, 5, 4, ctx) background(50, 300, 20, 25, 5, 4, ctx) background(250, 300, 20, 25, 5, 4, ctx) background(450, 300, 20, 25, 5, 4, ctx) #tone ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.font = \"25px Arial\" a=50 b=250 c=450 d=100 e=300 ctx.fillText(\"A Major\", a+10, d-25) ctx.fillText(\"C Major\", b+10, d-25) ctx.fillText(\"G Major\", c+10, d-25) ctx.fillText(\"D Major\", a+10, e-25) ctx.fillText(\"E Major\", b+10, e-25) ctx.fillText(\"Cmaj7\", c+15, e-25) ctx.fill() ctx.stroke() ctx.closePath() # o def background(x, y, r, xnum, ctx): ctx.beginPath() ctx.arc(x+xnum*20, y-12, r, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() background(50, 100, 5, 1, ctx) background(50, 100, 5, 5, ctx) background(250, 100, 5, 3, ctx) background(250, 100, 5, 5, ctx) background(450, 100, 5, 2, ctx) background(450, 100, 5, 3, ctx) background(50, 300, 5, 2, ctx) background(250, 300, 5, 4, ctx) background(250, 300, 5, 5, ctx) background(450, 300, 5, 3, ctx) background(450, 300, 5, 4, ctx) background(450, 300, 5, 5, ctx) # x def background(x, y, inc, ctx): ctx.beginPath() y=y-12 ctx.moveTo(x-inc,y-inc) ctx.lineTo(x+inc, y+inc) ctx.moveTo(x+inc, y-inc) ctx.lineTo(x-inc, y+inc) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() background(50, 100, 5, ctx) background(250, 100, 5, ctx) background(50, 300, 5, ctx) background(70, 300, 5, ctx) background(250, 300, 5, ctx) background(450, 300, 5, ctx) # number def background(x, y, xnum, ynum, text, ctx): ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" y=y+13 ctx.arc(x+xnum*20, y+ynum*25, 7, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" x=x-5 y=y+5 ctx.fillText(text, x+xnum*20, y+ynum*25) ctx.fill() ctx.stroke() ctx.closePath() background(50, 100, 2, 1, 1, ctx) background(50, 100, 3, 1, 2, ctx) background(50, 100, 4, 1, 3, ctx) background(250, 100, 4, 0, 1, ctx) background(250, 100, 2, 1, 2, ctx) background(250, 100, 1, 2, 3, ctx) background(450, 100, 1, 1, 1, ctx) background(450, 100, 0, 2, 2, ctx) background(450, 100, 4, 2, 3, ctx) background(450, 100, 5, 2, 4, ctx) background(50, 300, 3, 1, 1, ctx) background(50, 300, 4, 2, 2, ctx) background(50, 300, 5, 1, 3, ctx) background(250, 300, 3, 0, 1, ctx) background(250, 300, 1, 1, 2, ctx) background(250, 300, 2, 1, 3, ctx) background(450, 300, 2, 1, 1, ctx) background(450, 300, 1, 2, 2, ctx) 將繪圖內容納入 def 函式定義格式後: window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"chord1\"] ctx = canvas.getContext(\"2d\") def background(x, y, xinc, yinc, xnum, ynum, ctx): # 水平 for i in range(ynum+1): ctx.beginPath() if i == 0: ctx.lineWidth = 7 else: ctx.lineWidth = 1 ctx.moveTo(x-1, y+i*yinc) ctx.lineTo(x+xnum*xinc+1, y+i*yinc) ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 垂直 for i in range(xnum+1): ctx.beginPath() ctx.lineWidth = 1 ctx.moveTo(x+i*xinc, y) ctx.lineTo(x+i*xinc, y+ynum*yinc) ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() #tone ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.font = \"25px Arial\" a=50 b=250 c=450 d=100 e=300 ctx.fillText(\"A Major\", a+10, d-25) ctx.fillText(\"C Major\", b+10, d-25) ctx.fillText(\"G Major\", c+10, d-25) ctx.fillText(\"D Major\", a+10, e-25) ctx.fillText(\"E Major\", b+10, e-25) ctx.fillText(\"Cmaj7\", c+15, e-25) ctx.fill() ctx.stroke() ctx.closePath() # o def background(x, y, r, xnum, ctx): ctx.beginPath() ctx.arc(x+xnum*20, y-12, r, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() # x def background(x, y, inc, ctx): ctx.beginPath() y=y-12 ctx.moveTo(x-inc,y-inc) ctx.lineTo(x+inc, y+inc) ctx.moveTo(x+inc, y-inc) ctx.lineTo(x-inc, y+inc) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() # number def background(x, y, xnum, ynum, text, ctx): ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" y=y+13 ctx.arc(x+xnum*20, y+ynum*25, 7, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" x=x-5 y=y+5 ctx.fillText(text, x+xnum*20, y+ynum*25) ctx.fill() ctx.stroke() ctx.closePath()","url":"./w11-brython-hui-tu-lian-xi.html"},{"title":"W10 Brython 繪圖練習","tags":"Course","text":"Brython 繪圖 繪圖流程,導入程式庫,啟動,然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag1\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (100, 100) 座標點 ctx.moveTo(100, 100) # 然後畫直線到 (150, 200) 座標點 ctx.lineTo(150, 200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 # 實際執行畫線 ctx.moveTo(100, 200) ctx.lineTo(150, 100) ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() from browser import document as doc import math canvas = doc[\"japanflag2\"] ctx = canvas.getContext(\"2d\") #垂直 for i in range(6): ctx.beginPath() ctx.lineWidth = 1 ctx.moveTo(100+i*20,50) ctx.lineTo(100+i*20,150) ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() #水平 for i in range(5): ctx.beginPath() if i == 0: ctx.lineWidth = 7 else: ctx.lineWidth = 1 ctx.moveTo(99,50+i*25) ctx.lineTo(201,50+i*25) ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() from browser import document as doc import math canvas = doc[\"japanflag3\"] ctx = canvas.getContext(\"2d\") #垂直 for i in range(6): ctx.beginPath() ctx.lineWidth = 1 ctx.moveTo(100+i*20,50) ctx.lineTo(100+i*20,150) ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() #水平 for i in range(5): ctx.beginPath() if i == 0: ctx.lineWidth = 7 else: ctx.lineWidth = 1 ctx.moveTo(99,50+i*25) ctx.lineTo(201,50+i*25) ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() #A Major ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.font = \"25px Arial\" ctx.fillText(\"A Major\", 110, 25) ctx.fill() ctx.stroke() ctx.closePath() # 1.2.3 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" for i in range(3): ctx.arc(140+i*20, 87.5, 7, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"1\", 135, 92.5) ctx.fillText(\"2\", 155, 92.5) ctx.fillText(\"3\", 175, 92.5) ctx.fill() ctx.stroke() ctx.closePath() # o ctx.beginPath() ctx.arc(120, 40, 5, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() ctx.beginPath() ctx.arc(200, 40, 5, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() # x ctx.beginPath() #ctx.arc(100, 40, 5, 0, 2*math.pi, False) ctx.moveTo(95, 35) ctx.lineTo(105, 45) ctx.moveTo(105, 35) ctx.lineTo(95, 45) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath()","url":"./w10-brython-hui-tu-lian-xi.html"},{"title":"2016Fall CP 學員連結","tags":"Course","text":"利用計算機程式兩班選課名單可以產生個別成員的倉儲、筆記、投影片與網誌. 有關 Brython html 模組的用法, 請參考 http://www.brython.info/static_doc/en/html.html . 計算機程式甲班成員連結: window.onload=function(){ brython(1); } 甲班學員投影片: from browser import document, html container1 = document['container1'] adata = open(\"./../users/a.txt\").read() alist = adata.splitlines() n = 0 for stud_num in alist: mlink = html.A(stud_num, href=\"http://s\"+str(stud_num)+\".github.io/2016fallcp_hw\") mlink += \" | \" n = n +1 if n%8 == 0: mlink += html.BR() container1 <= mlink 甲班學員網誌: from browser import document, html from script1 import alist container2 = document['container2'] n = 0 for stud_num in alist: mlink = html.A(stud_num, href=\"http://s\"+str(stud_num)+\".github.io/2016fallcp_hw/blog\") mlink += \" | \" n = n +1 if n%8 == 0: mlink += html.BR() container2 <= mlink 甲班學員 wiki: from browser import document, html from script1 import alist container3 = document['container3'] n = 0 for stud_num in alist: mlink = html.A(stud_num, href=\"http://github.com/s\"+str(stud_num)+\"/2016fallcp_hw/wiki\") mlink += \" | \" n = n +1 if n%8 == 0: mlink += html.BR() container3 <= mlink 甲班學員倉儲: from browser import document, html from script1 import alist container4 = document['container4'] n = 0 for stud_num in alist: mlink = html.A(stud_num, href=\"http://github.com/s\"+str(stud_num)+\"/2016fallcp_hw\") mlink += \" | \" n = n +1 if n%8 == 0: mlink += html.BR() container4 <= mlink 乙班學員投影片: from browser import document, html container5 = document['container5'] adata = open(\"./../users/b.txt\").read() alist = adata.splitlines() n = 0 for stud_num in alist: mlink = html.A(stud_num, href=\"http://s\"+str(stud_num)+\".github.io/2016fallcp_hw\") mlink += \" | \" n = n +1 if n%8 == 0: mlink += html.BR() container5 <= mlink 乙班學員網誌: from browser import document, html from script5 import alist container6 = document['container6'] n = 0 for stud_num in alist: mlink = html.A(stud_num, href=\"http://s\"+str(stud_num)+\".github.io/2016fallcp_hw/blog\") mlink += \" | \" n = n +1 if n%8 == 0: mlink += html.BR() container6 <= mlink 乙班學員 wiki: from browser import document, html from script5 import alist container7 = document['container7'] n = 0 for stud_num in alist: mlink = html.A(stud_num, href=\"http://github.com/s\"+str(stud_num)+\"/2016fallcp_hw/wiki\") mlink += \" | \" n = n +1 if n%8 == 0: mlink += html.BR() container7 <= mlink 乙班學員倉儲: from browser import document, html from script5 import alist container8 = document['container8'] n = 0 for stud_num in alist: mlink = html.A(stud_num, href=\"http://github.com/s\"+str(stud_num)+\"/2016fallcp_hw\") mlink += \" | \" n = n +1 if n%8 == 0: mlink += html.BR() container8 <= mlink 上述連結代表處理程式: window.onload=function(){ brython(1); } 甲班學員投影片: from browser import document, html container1 = document['container1'] adata = open(\"./../users/a.txt\").read() alist = adata.splitlines() n = 0 for stud_num in alist: mlink = html.A(stud_num, href=\"http://s\"+str(stud_num)+\".github.io/2016fallcp_hw\") mlink += \" | \" n = n +1 if n%8 == 0: mlink += html.BR() container1 <= mlink 甲班學員網誌: from browser import document, html # 學員選課名單直接從 id 為 script1 的程式段中導入 from script1 import alist container2 = document['container2'] n = 0 for stud_num in alist: mlink = html.A(stud_num, href=\"http://s\"+str(stud_num)+\".github.io/2016fallcp_hw/blog\") mlink += \" | \" n = n +1 if n%8 == 0: mlink += html.BR() container2 <= mlink","url":"./2016fall-cp-xue-yuan-lian-jie.html"}]};