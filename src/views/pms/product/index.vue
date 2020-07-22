<template>
  <div class="app-container">
    <el-card class="filter-container" shadow="never">
      <div>
        <i class="el-icon-search"></i>
        <span>筛选搜索</span>
        <el-button style="float: right" @click="handleSearchList()" type="primary" size="small">查询结果</el-button>
        <el-button style="float: right; margin-right: 15px" @click="handleResetSearch()" size="small">重置</el-button>
      </div>
      <div style="margin-top: 15px">
        <el-form :inline="true" size="small" label-width="140px">
          <el-form-item label="输入搜索：">
            <el-input style="width: 203px" placeholder="商品名称"></el-input>
          </el-form-item>
          <el-form-item label="商品货号：">
            <el-input style="width: 203px" placeholder="商品货号"></el-input>
          </el-form-item>
          <el-form-item label="商品分类：">
            <el-cascader clearable> </el-cascader>
          </el-form-item>
          <el-form-item label="商品品牌：">
            <el-select placeholder="请选择品牌" clearable>
              <el-option v-for="item in brandOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import { fetchList, updateDeleteStatus, updateNewStatus, updateRecommendStatus, updatePublishStatus } from '@/api/product'
import { fetchList as fetchSkuStockList, update as updateSkuStockList } from '@/api/skuStock'
import { fetchList as fetchProductAttrList } from '@/api/productAttr'
import { fetchList as fetchBrandList } from '@/api/brand'
import { fetchListWithChildren } from '@/api/productCate'

const defaultListQuery = {
  keyword: null,
  pageNum: 1,
  pageSize: 5,
  publishStatus: null,
  verifyStatus: null,
  productSn: null,
  productCategoryId: null,
  brandId: null,
}
export default {
  name: 'productList',
  data() {
    return {
      editSkuInfo: {
        dialogVisible: false,
        productId: null,
        productSn: '',
        productAttributeCategoryId: null,
        stockList: [],
        productAttr: [],
        keyword: null,
      },
      operates: [
        {
          label: '商品上架',
          value: 'publishOn',
        },
        {
          label: '商品下架',
          value: 'publishOff',
        },
        {
          label: '设为推荐',
          value: 'recommendOn',
        },
        {
          label: '取消推荐',
          value: 'recommendOff',
        },
        {
          label: '设为新品',
          value: 'newOn',
        },
        {
          label: '取消新品',
          value: 'newOff',
        },
        {
          label: '转移到分类',
          value: 'transferCategory',
        },
        {
          label: '移入回收站',
          value: 'recycle',
        },
      ],
      operateType: null,
      listQuery: Object.assign({}, defaultListQuery),
      list: null,
      total: null,
      listLoading: true,
      selectProductCateValue: null,
      multipleSelection: [],
      productCateOptions: [],
      brandOptions: [],
      publishStatusOptions: [
        {
          value: 1,
          label: '上架',
        },
        {
          value: 0,
          label: '下架',
        },
      ],
      verifyStatusOptions: [
        {
          value: 1,
          label: '审核通过',
        },
        {
          value: 0,
          label: '未审核',
        },
      ],
    }
  },
  created() {
    this.getList()
    this.getBrandList()
    this.getProductCateList()
  }
}
</script>
