'use server';

export const handleForm = async(prevState : any, data : FormData) => {
    console.log(prevState);
    console.log('POST Server action');
    console.log('form Data : ', data.get('email'), data.get('password'));
    await new Promise((resolve) => setTimeout(resolve, 5000))
    console.log('로그인 성공')

    return {
        errors: ['비밀번호가 너무 짧습니다.', '비밀번호를 다시 한번 확인 해 주세요.']
    }
  }
