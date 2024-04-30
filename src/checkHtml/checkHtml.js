// 采用IntersectionObserver  判断是否出现兄弟元素遮挡，或者超出父元素
// 采用MutationObserver  监听元素的变化，重新计算
// 采用ResizeObserver  监听元素的变化，重新计算
import {logOfBeyond, logOfOverlap} from "../logger.js";

export function checkOverlap (targetEl, brothers){
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        // 元素与兄弟元素重叠
        
        console.log('重叠了')
        logOfOverlap(targetEl, entry.target)
      }
    }
  }, {
    root: targetEl.parentElement,
    threshold: 1.0,
  });

  brothers.forEach(brother => {
    observer.observe(targetEl, {
      target: brother,
    });
  });
}

export function checkIsBeyondParent(targetEl, parentEl) {
  const targetRect = targetEl.getBoundingClientRect();
  const parentRect = parentEl.getBoundingClientRect();
  
  if (
    targetRect.left < parentRect.left ||
    targetRect.right > parentRect.right ||
    targetRect.top < parentRect.top ||
    targetRect.bottom > parentRect.bottom||
    targetEl.scrollWidth > parentEl.offsetWidth
  ) {
    // 元素或其内容超出了父元素
    logOfBeyond(targetEl, parentEl);
  }
}
