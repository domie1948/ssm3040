const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm884v4/",
            name: "ssm884v4",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm884v4/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "OA办公系统"
        } 
    }
}
export default base
