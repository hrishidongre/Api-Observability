import {AsyncLocalStorage} from "async_hooks";
 
type RequestContext = {
    requestId:string;
}

const asyncLocalStorage = new AsyncLocalStorage<RequestContext>();

export function runWithRequestContext(context : RequestContext,fn: ()=>void){
    asyncLocalStorage.run(context,fn);
}

export function getRequest(): RequestContext | undefined {
    return asyncLocalStorage.getStore()
}