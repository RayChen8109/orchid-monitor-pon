# 蘭花培養環境監視系統

使用Angular + php做開發，資料庫使用MySQL

## 路由

```
router
｜
｜———— main
｜   ｜
｜   ｜———— home
｜   ｜———— history
｜   ｜———— introduceteam
｜   ｜———— snapshot
｜   ｜———— setup
｜
｜———— login

```
1. 登入畫面
    
1. 即時資料
    -監控三個區域的溫度、濕度、照度、風速等數值，每五秒取一次向後端發出data request
1. 現場畫面
    -顯示蘭花照片，可在系統設定中設定拍照區間
1. 歷史資料
    -透過Datetimepicker調閱時間內的溫度、濕度、照度以及風速數值，並以table以及chart顯示
1. 系統設定
    -設定感測器存檔週期以及影像儲存時間
