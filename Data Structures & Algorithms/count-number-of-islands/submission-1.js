class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const n = grid.length;
        const m = grid[0].length;
        const dfs = (grid, r, c, visited) => {
            if(Math.min(r, c) < 0 || r === n || c === m) {
                return;
            }
            if(grid[r][c] === '0' || visited[r][c]) {
                return;
            }

            grid[r][c] = "0";

            dfs(grid, r + 1, c, visited)
            dfs(grid, r - 1, c, visited)
            dfs(grid, r, c + 1, visited)
            dfs(grid, r, c - 1, visited)

        }   

        const visited = [];

        for(let i = 0; i<n; i++) {
            visited[i] = [];
            for(let j = 0; j<m; j++) {
                visited[i][j] = false;
            }
        }
        
        let res = 0;
        for(let i = 0; i<n; i++) {
           for(let j = 0; j<m; j++) {
                if(grid[i][j] === '1') {
                        res++;
                        dfs(grid, i, j, visited);
                }
            } 
        }
        return res;
    }
}
