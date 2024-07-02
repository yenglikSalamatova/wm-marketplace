// App paths

export const pathsPublic: {[k:string]:string} = {
    home: '/',
    productDetails: '/product/:idOrSlug'
}

export const pathsPrivate: {[k:string]:string} = {
    accountSettings: '/account-settings',
}

export const paths: {[k:string]:string} = Object.assign({}, pathsPublic, pathsPrivate);


// Check if the path matches with the key of the paths object 
export const checkPathMatch = (currentPath: string, paths: {[k:string]: string}) => {
    const pathFirstPart = currentPath.split('/')[1];
   
    let isMatch = false; 
    Object.keys(paths).forEach((key:string) => {
        if(paths[key].slice(1) === pathFirstPart){
            console.log("match")
            isMatch = true;
        }
    });
    return isMatch;
}