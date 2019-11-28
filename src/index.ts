function booleanToInt(value: boolean){
  if (value){
    return 1;
  } else {
    return 0;
  }
}

let a: number[] = 
[1,2,3];

let b: Array<string> = ['a', 'b'];

let a2: any = [1,2];

//unions
let aunion: 1 | 2 | 3 =1;

let response: string;

function httpStatus(status: 200 | 404){
  if (status === 200) {
      response = 'OK';
  } else if (status === 404){
    response = 'NOT FOUND';
  }
  console.log(response);
  return response;
}

httpStatus(404);