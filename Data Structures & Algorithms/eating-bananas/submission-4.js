class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     * 
     * 
     * h = 9
     * 
     * [1,4,3,2]
     *.[]
     * 
     * 1,4,3,2
     * 
     * 1, 2, 3, 4
     * 
     */
    minEatingSpeed(piles, h) {

        let min = Math.max(...piles);

        let left = 1 // 0
        let right = min; // 4


        while(left <= right) {
            const mid = Math.floor((right + left) / 2);
            
            let hours = 0;
            for(let i =0; i<piles.length; i++) {
                hours += Math.ceil(piles[i] /mid) 
            }
            if(hours <= h) {
                min = Math.min(min, mid)
                right = mid -1;
            } else {
                left = mid +1;
            }
        }
        return min;

    }
}
