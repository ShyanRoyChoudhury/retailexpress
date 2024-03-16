import axios from 'axios';
import { AppDispatch } from '../store/store';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/features/userSlice';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useState } from 'react';

export const useLogin = () => {
    const dispatch: AppDispatch = useDispatch()
    const router = useRouter();

    const login = async ({ username, password}: { username: string, password: string})=> {
        try {
            const res = await axios.post(
              "/api/signin",
              {
                username,
                password
              },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const { redirectURL, error } = res.data;
            //Cookies.set("currentUser", token, { path: '/'});
              if(error){
                throw new Error(error)
              }

            if(res && redirectURL){
                //dispatch(addUser(userName));
                router.push(redirectURL)
                // setLoggedIn(true)
            }
          } catch (err) {
            console.error(err);
            throw err
          }
    }

    return { login };
    // return { login } ;
}