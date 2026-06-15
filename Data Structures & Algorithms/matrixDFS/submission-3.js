class Solution {
    /**
     * @param {number[][]} grid
     * @returns {number}
     */
    countPaths(grid) {
        const dfs = (grid, visited, r, c) => {
            const n = grid.length;
            const m = grid[0].length;
            console.log(r, c)
            if (Math.min(r, c) < 0 || r === n || c === m)
                return 0;
            if(visited[r][c] === true || grid[r][c] === 1) {
                return 0
            }
            if(r === n - 1 && c === m -1 ) {
                return 1;
            }

            let count = 0;
            visited[r][c] = true;
            count += dfs(grid, visited, r + 1, c)
            count += dfs(grid, visited, r - 1, c)
            count += dfs(grid, visited, r, c + 1)
            count += dfs(grid, visited, r, c - 1)
            visited[r][c] = false;
            return count;
        };
        const n = grid.length;
        const m = grid[0].length;
        const visited = [];
        for (let i = 0; i < n; i++) {
            visited[i] = []
            for (let j = 0; j < m; j++) {
                visited[i][j] = false;
            }
        }
        return dfs(grid, visited, 0, 0);
    }
}
