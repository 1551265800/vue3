import {watch} from 'vue';

export function countUtil(count) {
    watch(count,(newValue,oldValue)=>{
        console.log(oldValue,newValue);
    })
}