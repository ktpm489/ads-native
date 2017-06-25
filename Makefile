build: build_android sign_arm_android sign_x86_android copy_signed
build_android:
	cd android && ./gradlew assembleRelease
sign_arm_android:
	cd android/app/build/outputs/apk && jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore app-armeabi-v7a-release-unsigned.apk alias_name
sign_x86_android:
	cd android/app/build/outputs/apk && jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore app-x86-release-unsigned.apk alias_name
copy_signed:
	cp android/app/build/outputs/apk/app-armeabi-v7a-release-unsigned.apk ./build/signed_arm.apk && cp android/app/build/outputs/apk/app-x86-release-unsigned.apk ./build/signed_x86.apk