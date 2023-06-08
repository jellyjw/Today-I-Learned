## axios로 이미지 파일 전송
```js
	const formData = new FormData();
	formData.append("profile", fileSrc); // key, value
	axios({
		headers: {
			"Content-Type": "multipart/form-data",
		},
		url: "s3으로 업로드 가능한 url 입력",
		method: "POST",
		data: formData,
	})
		.then((res) => setImageUrl(res.data)) // 미리 만들어둔 state
		.catch((err) => console.log(err));
	}
```

잘못된 코드
```js
useEffect(() => {
	const formData = new FormData();
	formData.append("profile", fileSrc);
	axios({
		headers: {
			"Content-Type": "multipart/form-data",
		},
		url: "",
		method: "POST",
		data: formData,
	})
		.then((res) => setImageUrl(res.data))
		.catch((err) => console.log(err));
	}
 }, [fileSrc]
```
