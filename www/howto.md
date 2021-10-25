keytool -genkey -v -keystore <keystoreName>.keystore -alias <Keystore AliasName> -keyalg <Key algorithm> -keysize <Key size> -validity <Key Validity in Days>
keytool -genkey -v -keystore agrimart-agriboost.keystore -alias AgriMart -keyalg RSA -keysize 2048 -validity 10000

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore <keystorename> <Unsigned APK file> <Keystore Alias name>
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore agrimart-agriboost.keystore app-release-unsigned.apk AgriMart

C:\Users\christian\AppData\Local\Android\Sdk\build-tools\29.0.2\zipalign -v 9  app-release-unsigned.apk agrimart.apk



jarsigner -verbose -sigalg SHA256withRSA  -digestalg SHA-256 -keystore agrimart-agriboost.keystore app-release.abb AgriMart

C:\Users\christian\AppData\Local\Android\Sdk\build-tools\29.0.2\zipalign -v 9  app-release.abb agrimart.apk


cordova create agribloom com.agribloom.agriboost AgriBloom