---
title: element-ui选择框过长折行问题
date: 2021-05-12 14:31:27
permalink: /pages/46e520/
categories:
  - 编程
  - bug记录
tags:
  - 
---
> 解决方案如下~~~
```javascript
<style lang="scss">
.spotMonitor{
	.el-select__tags, .el-select__tags-text {
		display: inline-block;
		max-width:90px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.el-select .el-tag__close.el-icon-close {
		top: -7px!important;
	}
}
</style>
```    