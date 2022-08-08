# Mega-API-project



1. Post Register
			http://localhost:8080/api/v1/auth/register
			Sample Input 
				 {"name":"Chaitanya",
				 "phone":"9805688664"
				 }
   		Sample Output 
				 If already. registered

				 {
					"type": "error",
					"message": "Phone no. already registered",
					"data": null
			}

			If new user

			{
					"type": "success",
					"message": "Account created OTP sended to mobile number",
					"data": {
							"userId": "62e7b5ddb7b37d52703225d6"
					}
			}

			(data containing to be saved and to be sent with otp)
			2. Verify OTP http://localhost:8080/api/v1/auth/verify
			
			
		Sample input 
		
		{
    "otp": "325802" ,

    "userId": "62e5ad84798c1ea91ad8b437" (from the data field given in the register and login post request)

    

}

			Wrong OTP
			{
					"type": "error",
					"message": " Incorrect OTP",
					"data": null
			}



			On Success

			{
					"type": "success",
					"message": "OTP verified successfully",
					"data": {
							"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmU1YWQ4NDc5OGMxZWE5MWFkOGI0MzciLCJpYXQiOjE2NTkzNTI4NjcsImV4cCI6MTY1OTM1NjQ2N30.hSHvzLT4f_KZ4UvL5WYlv4ndhfHjLS-NxrJJV5ZMMAU",
							"userId": "62e5ad84798c1ea91ad8b437"
					}
			}


2. Login post 
		http://localhost:8080/api/v1/auth/login_with_phone
		Sample Input
		
	 
				 {"name":"Chaitanya",
				 "phone":"9805688664"
				 }
		Sample Output

		{
				"type": "success",
				"message": "OTP sended to your registered phone number",
				"data": {
						"userId": "62e5ad84798c1ea91ad8b437"
				}
		}
		
3. get home

http://localhost:8080/api/v1/course/home

get request

sample output

 {
            "title": "Physics",
            "coursePrice": 1100,
            "totalLikes": 50000,
            "units": [
                {
                    "title": [],
                    "isPaid": [],
                    "description": [],
                    "price": [],
                    "_id": "62e751d1f0340056bbdd8d5c",
                    "tag": [],
                    "__v": 0
                }
            ],
            "quote": "just do it",
            "totalVideoLessons": 10,
            "totalResources": 10,
            "totalArticles": 100
        }
    ]
}
		
		
		
		
		
		
		
		
		
		
		
