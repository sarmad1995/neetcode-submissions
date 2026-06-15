class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const n = grid.length;
        const m = grid[0].length;

        const dfs = (grid, r, c) => {
            if(r < 0 || c < 0 || r === n || c === m) {
                return 0;
            }
            if(grid[r][c] === 0) {
                return 0;
            }
            grid[r][c] = 0;

            let count = 1;
            count += dfs(grid, r + 1, c)
            count += dfs(grid, r - 1, c)
            count += dfs(grid, r, c + 1)
            count += dfs(grid, r, c - 1)

            return count;
        }

        let res = 0;
        for(let i = 0; i<n; i++) {
            for(let j = 0; j<m; j++) {
                if(grid[i][j] === 1) {
                    const area = dfs(grid, i, j);
                    res = Math.max(area, res)
                }
            }
        }
        return res;
    }
}
