/** @odoo-module **/

import { Component, useState, useEffect, useRef } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { YlhcSubForm } from "@ylhc_sub_form/ylhc_sub_form";
import { useService } from "@web/core/utils/hooks";

export class LrpPlan extends Component {

    setup() {
        super.setup();

        this.orm = useService('orm')

        // tree ref
        this.leftTreeRef = useRef("leftTree");
        this.rightTreeRef = useRef("rightTree");

        // left tree
        useEffect(() => {
            this.instance_left_tree();
        }, () => [this.leftTreeRef.el]);

        // right tree
        useEffect(() => {
            this.instance_right_tree();
        }, () => [this.rightTreeRef.el]);
    }

    onRecordSaved(record) {
        this.data = record.data
        // 左这里写的你的计算逻辑。生成计划以后调用
        // this.left_table.setData(data);
    }

    instance_left_tree() {

        var tableDataNested = [
            {name:"Oli Bob", location:"United Kingdom", gender:"male", col:"red", dob:"14/04/1984", _children:[
                {name:"Mary May", location:"Germany", gender:"female", col:"blue", dob:"14/05/1982"},
                {name:"Christine Lobowski", location:"France", gender:"female", col:"green", dob:"22/05/1982"},
                {name:"Brendon Philips", location:"USA", gender:"male", col:"orange", dob:"01/08/1980", _children:[
                    {name:"Margret Marmajuke", location:"Canada", gender:"female", col:"yellow", dob:"31/01/1999"},
                    {name:"Frank Harbours", location:"Russia", gender:"male", col:"red", dob:"12/05/1966"},
                ]},
            ]},
            {name:"Jamie Newhart", location:"India", gender:"male", col:"green", dob:"14/05/1985"},
            {name:"Gemma Jane", location:"China", gender:"female", col:"red", dob:"22/05/1982", _children:[
                {name:"Emily Sykes", location:"South Korea", gender:"female", col:"maroon", dob:"11/11/1970"},
            ]},
            {name:"James Newman", location:"Japan", gender:"male", col:"red", dob:"22/03/1998"},
        ];

        this.left_table = new Tabulator(this.leftTreeRef.el, {
            data: tableDataNested,
            dataTree: true,
            selectableRows: 1, //make rows selectable
            dataTreeStartExpanded: true,
            columns: [
                { title: "品名", field: "name", width: 200, responsive: 0 },
                { title: "规格", field: "specification", width: 150 },
                { title: "生产数量", field: "production_quantity", width: 150, responsive: 2 },
                { title: "单位", field: "unit", width: 150 },
                { title: "需求日", field: "demand_date", hozAlign: "center", sorter: "date", width: 150 },
                { title: "开工日", field: "start_date", hozAlign: "center", sorter: "date", width: 150 },
                { title: "完工日", field: "end_date", hozAlign: "center", sorter: "date", width: 150 },
                { title: "仓库", field: "warehouse", width: 150 },
                { title: "仓库名称", field: "warehouse_name", width: 150 },
                { title: "委外供应商/工作中心", field: "outsourcing_supplier", width: 150 },
                { title: "批量", field: "batch", width: 150 },
                { title: "固定前置天数", field: "fixed_lead_days", width: 150 },
                { title: "变更前置天数", field: "change_lead_days", width: 150 },
                { title: "加工数量", field: "processing_quantity", width: 150 },
                { title: "加工单位", field: "processing_unit", width: 150 },
                { title: "币种", field: "currency", width: 150 },
                { title: "委外单价", field: "outsourcing_price", width: 150 },
                { title: "来源单号", field: "source_number", width: 150 },
                { title: "库存量", field: "stock_quantity", width: 150 },
                { title: "安全存量", field: "safety_stock", width: 150 },
                { title: "预计进货", field: "expected_purchase", width: 150 },
                { title: "预计请购", field: "expected_requisition", width: 150 },
                { title: "预计生产", field: "expected_production", width: 150 },
                { title: "预计销售", field: "expected_sales", width: 150 },
                { title: "预计领用", field: "expected_use", width: 150 },
                { title: "计划采购", field: "planned_purchase", width: 150 },
                { title: "计划生产", field: "planned_production", width: 150 },
                { title: "计划销售", field: "planned_sales", width: 150 },
                { title: "计划领用", field: "planned_use", width: 150 },
                { title: "被替代料", field: "replaced_material", width: 150 },
                { title: "替代他料", field: "replace_material", width: 150 },
                { title: "毛需求量", field: "gross_demand", width: 150 },
                { title: "已发放量", field: "issued_quantity", width: 150 },
                { title: "原始需求生产量", field: "original_demand_production", width: 150 },
                { title: "开工日占用天数", field: "start_date_days", width: 150 },
                { title: "完工日占用天数", field: "end_date_days", width: 150 },
                { title: "第一批量开工日占用天数", field: "first_batch_start_date_days", width: 150 },
                { title: "最后一批量开工日占用天数", field: "last_batch_start_date_days", width: 150 },
                { title: "第一批量开工日", field: "first_batch_start_date", width: 150 },
                { title: "最后批量", field: "last_batch", width: 150 },
            ]
        });

        this.left_table.on("rowSelectionChanged", (data, rows) => {
            // 根据data计逄右侧表的逻辑,调用 this.right_table.setData() 进行数据展示
        });
          
    }

    instance_right_tree() {

        var cheeseData = [
            {id:1, type:"批次号", batch_number:"batch_number", version:"version", item_number:"item_number", week_19_1:"week_19_1", week_19_2:"week_19_2", week_19_3:"week_19_3", week_19_4:"week_19_4", week_19_5:"week_19_5", week_19_6:"week_19_6", week_19_7:"week_19_7", week_20_1:"week_20_1", week_20_2:"week_20_2", week_20_3:"week_20_3", week_20_4:"week_20_4", week_20_5:"week_20_5", week_20_6:"week_20_6", week_20_7:"week_20_7", week_21_1:"week_21_1", week_21_2:"week_21_2", week_21_3:"week_21_3", week_21_4:"week_21_4", week_21_5:"week_21_5", week_21_6:"week_21_6", week_21_7:"week_21_7", week_22_1:"week_22_1", week_22_2:"week_22_2", week_22_3:"week_22_3", week_22_4:"week_22_4", week_22_5:"week_22_5", week_22_6:"week_22_6", week_22_7:"week_22_7", week_23_1:"week_23_1", week_23_2:"week_23_2", week_23_3:"week_23_3", week_23_4:"week_23_4", week_23_5:"week_23_5", week_23_6:"week_23_6", week_23_7:"week_23_7", week_24_1:"week_24_1", week_24_2:"week_24_2", week_24_3:"week_24_3", week_24_4:"week_24_4", week_24_5:"week_24_5", week_24_6:"week_24_6", week_24_7:"week_24_7", week_25_1:"week_25_1", week_25_2:"week_25_2", week_25_3:"week_25_3", week_25_4:"week_25_4", week_25_5:"week_25_5", week_25_6:"week_25_6", week_25_7:"week_25_7"},
            {id:2, type:"批次号", batch_number:"batch_number", version:"version", item_number:"item_number", week_19_1:"week_19_1", week_19_2:"week_19_2", week_19_3:"week_19_3", week_19_4:"week_19_4", week_19_5:"week_19_5", week_19_6:"week_19_6", week_19_7:"week_19_7", week_20_1:"week_20_1", week_20_2:"week_20_2", week_20_3:"week_20_3", week_20_4:"week_20_4", week_20_5:"week_20_5", week_20_6:"week_20_6", week_20_7:"week_20_7", week_21_1:"week_21_1", week_21_2:"week_21_2", week_21_3:"week_21_3", week_21_4:"week_21_4", week_21_5:"week_21_5", week_21_6:"week_21_6", week_21_7:"week_21_7", week_22_1:"week_22_1", week_22_2:"week_22_2", week_22_3:"week_22_3", week_22_4:"week_22_4", week_22_5:"week_22_5", week_22_6:"week_22_6", week_22_7:"week_22_7", week_23_1:"week_23_1", week_23_2:"week_23_2", week_23_3:"week_23_3", week_23_4:"week_23_4", week_23_5:"week_23_5", week_23_6:"week_23_6", week_23_7:"week_23_7", week_24_1:"week_24_1", week_24_2:"week_24_2", week_24_3:"week_24_3", week_24_4:"week_24_4", week_24_6:"week_24_6", week_24_7:"week_24_7", week_25_1:"week_25_1", week_25_2:"week_25_2", week_25_3:"week_25_3", week_25_4:"week_25_4", week_25_5:"week_25_5", week_25_6:"week_25_6", week_25_7:"week_25_7"},
            {id:3, type:"批次号", batch_number:"batch_number", version:"version", item_number:"item_number", week_19_1:"week_19_1", week_19_2:"week_19_2", week_19_3:"week_19_3", week_19_4:"week_19_4", week_19_5:"week_19_5", week_19_6:"week_19_6", week_19_7:"week_19_7", week_20_1:"week_20_1", week_20_2:"week_20_2", week_20_3:"week_20_3", week_20_4:"week_20_4", week_20_5:"week_20_5", week_20_6:"week_20_6", week_20_7:"week_20_7", week_21_1:"week_21_1", week_21_2:"week_21_2", week_21_3:"week_21_3", week_21_4:"week_21_4", week_21_5:"week_21_5", week_21_6:"week_21_6", week_21_7:"week_21_7", week_22_1:"week_22_1", week_22_2:"week_22_2", week_22_3:"week_22_3", week_22_4:"week_22_4", week_22_5:"week_22_5", week_22_6:"week_22_6", week_22_7:"week_22_7", week_23_1:"week_23_1", week_23_2:"week_23_2", week_23_3:"week_23_3", week_23_4:"week_23_4", week_23_5:"week_23_5", week_23_6:"week_23_6", week_23_7:"week_23_7", week_24_1:"week_24_1", week_24_2:"week_24_2", week_24_3:"week_24_3", week_24_4:"week_24_4", week_24_5: "week_24_5", week_24_6:"week_24_6", week_24_7:"week_24_7", week_25_1:"week_25_1", week_25_2:"week_25_2", week_25_3:"week_25_3", week_25_4:"week_25_4", week_25_5:"week_25_5", week_25_6:"week_25_6", week_25_7:"week_25_7"},
            {id:4, type:"批次号", batch_number:"batch_number", version:"version", item_number:"item_number", week_19_1:"week_19_1", week_19_2:"week_19_2", week_19_3:"week_19_3", week_19_4:"week_19_4", week_19_5:"week_19_5", week_19_6:"week_19_6", week_19_7:"week_19_7", week_20_1:"week_20_1", week_20_2:"week_20_2", week_20_3:"week_20_3", week_20_4:"week_20_4", week_20_5:"week_20_5", week_20_6:"week_20_6", week_20_7:"week_20_7", week_21_1:"week_21_1", week_21_2:"week_21_2", week_21_3:"week_21_3", week_21_4:"week_21_4", week_21_5:"week_21_5", week_21_6:"week_21_6", week_21_7:"week_21_7", week_22_1:"week_22_1", week_22_2:"week_22_2", week_22_3:"week_22_3", week_22_4:"week_22_4", week_22_5:"week_22_5", week_22_6:"week_22_6", week_22_7:"week_22_7", week_23_1:"week_23_1", week_23_2:"week_23_2", week_23_3:"week_23_3", week_23_4:"week_23_4", week_23_5:"week_23_5", week_23_6:"week_23_6", week_23_7:"week_23_7", week_24_1:"week_24_1", week_24_2:"week_24_2", week_24_3:"week_24_3", week_24_4:"week_24_4", week_24_5:"week_24_5", week_24_6:"week_24_6", week_24_7:"week_24_7", week_25_1:"week_25_1", week_25_2:"week_25_2", week_25_3:"week_25_3", week_25_4:"week_25_4", week_25_5:"week_25_5", week_25_6:"week_25_6", week_25_7:"week_25_7"},
            {id:5, type:"批次号", batch_number:"batch_number", version:"version", item_number:"item_number", week_19_1:"week_19_1", week_19_2:"week_19_2", week_19_3:"week_19_3", week_19_4:"week_19_4", week_19_5:"week_19_5", week_19_6:"week_19_6", week_19_7:"week_19_7", week_20_1:"week_20_1", week_20_2:"week_20_2", week_20_3:"week_20_3", week_20_4:"week_20_4", week_20_5:"week_20_5", week_20_6:"week_20_6", week_20_7:"week_20_7", week_21_1:"week_21_1", week_21_2:"week_21_2", week_21_3:"week_21_3", week_21_4:"week_21_4", week_21_5:"week_21_5", week_21_6:"week_21_6", week_21_7:"week_21_7", week_22_1:"week_22_1", week_22_2:"week_22_2", week_22_3:"week_22_3", week_22_4:"week_22_4", week_22_5:"week_22_5", week_22_6:"week_22_6", week_22_7:"week_22_7", week_23_1:"week_23_1", week_23_2:"week_23_2", week_23_3:"week_23_3", week_23_4:"week_23_4", week_23_5:"week_23_5", week_23_6:"week_23_6", week_23_7:"week_23_7", week_24_1:"week_24_1", week_24_2:"week_24_2", week_24_3:"week_24_3", week_24_4:"week_24_4", week_24_5:"week_24_5", week_24_6:"week_24_6", week_24_7:"week_24_7", week_25_1:"week_25_1", week_25_2:"week_25_2", week_25_3:"week_25_3", week_25_4:"week_25_4", week_25_5:"week_25_5", week_25_6:"week_25_6", week_25_7:"week_25_7"},
            {id:6, type:"批次号", batch_number:"batch_number", version:"version", item_number:"item_number", week_19_1:"week_19_1", week_19_2:"week_19_2", week_19_3:"week_19_3", week_19_4:"week_19_4", week_19_5:"week_19_5", week_19_6:"week_19_6", week_19_7:"week_19_7", week_20_1:"week_20_1", week_20_2:"week_20_2", week_20_3:"week_20_3", week_20_4:"week_20_4", week_20_5:"week_20_5", week_20_6:"week_20_6", week_20_7:"week_20_7", week_21_1:"week_21_1", week_21_2:"week_21_2", week_21_3:"week_21_3", week_21_4:"week_21_4", week_21_5:"week_21_5", week_21_6:"week_21_6", week_21_7:"week_21_7", week_22_1:"week_22_1", week_22_2:"week_22_2", week_22_3:"week_22_3", week_22_4:"week_22_4", week_22_5:"week_22_5", week_22_6:"week_22_6", week_22_7:"week_22_7", week_23_1:"week_23_1", week_23_2:"week_23_2", week_23_3:"week_23_3", week_23_4:"week_23_4", week_23_5:"week_23_5", week_23_6:"week_23_6", week_23_7:"week_23_7", week_24_1:"week_24_1", week_24_2:"week_24_2", week_24_3:"week_24_3", week_24_4:"week_24_4", week_24_5:"week_24_5", week_24_6:"week_24_6", week_24_7:"week_24_7", week_25_1:"week_25_1", week_25_2:"week_25_2", week_25_3:"week_25_3", week_25_4:"week_25_4", week_25_5:"week_25_5", week_25_6:"week_25_6", week_25_7:"week_25_7"},
            {id:7, type:"批次号", batch_number:"batch_number", version:"version", item_number:"item_number", week_19_1:"week_19_1", week_19_2:"week_19_2", week_19_3:"week_19_3", week_19_4:"week_19_4", week_19_5:"week_19_5", week_19_6:"week_19_6", week_19_7:"week_19_7", week_20_1:"week_20_1", week_20_2:"week_20_2", week_20_3:"week_20_3", week_20_4:"week_20_4", week_20_5:"week_20_5", week_20_6:"week_20_6", week_20_7:"week_20_7", week_21_1:"week_21_1", week_21_2:"week_21_2", week_21_3:"week_21_3", week_21_4:"week_21_4", week_21_5:"week_21_5", week_21_6:"week_21_6", week_21_7:"week_21_7", week_22_1:"week_22_1", week_22_2:"week_22_2", week_22_3:"week_22_3", week_22_4:"week_22_4", week_22_5:"week_22_5", week_22_6:"week_22_6", week_22_7:"week_22_7", week_23_1:"week_23_1", week_23_2:"week_23_2", week_23_3:"week_23_3", week_23_4:"week_23_4", week_23_5:"week_23_5", week_23_6:"week_23_6", week_23_7:"week_23_7", week_24_1:"week_24_1", week_24_2:"week_24_2", week_24_3:"week_24_3", week_24_4:"week_24_4", week_24_5:"week_24_5", week_24_6:"week_24_6", week_24_7:"week_24_7", week_25_1:"week_25_1", week_25_2:"week_25_2", week_25_3:"week_25_3", week_25_4:"week_25_4", week_25_5:"week_25_5", week_25_6:"week_25_6", week_25_7:"week_25_7"},
            {id:8, type:"批次号", batch_number:"batch_number", version:"version", item_number:"item_number", week_19_1:"week_19_1", week_19_2:"week_19_2", week_19_3:"week_19_3", week_19_4:"week_19_4", week_19_5:"week_19_5", week_19_6:"week_19_6", week_19_7:"week_19_7", week_20_1:"week_20_1", week_20_2:"week_20_2", week_20_3:"week_20_3", week_20_4:"week_20_4", week_20_5:"week_20_5", week_20_6:"week_20_6", week_20_7:"week_20_7", week_21_1:"week_21_1", week_21_2:"week_21_2", week_21_3:"week_21_3", week_21_4:"week_21_4", week_21_5:"week_21_5", week_21_6:"week_21_6", week_21_7:"week_21_7", week_22_1:"week_22_1", week_22_2:"week_22_2", week_22_3:"week_22_3", week_22_4:"week_22_4", week_22_5:"week_22_5", week_22_6:"week_22_6", week_22_7:"week_22_7", week_23_1:"week_23_1", week_23_2:"week_23_2", week_23_3:"week_23_3", week_23_4:"week_23_4", week_23_5:"week_23_5", week_23_6:"week_23_6", week_23_7:"week_23_7", week_24_1:"week_24_1", week_24_2:"week_24_2", week_24_3:"week_24_3", week_24_4:"week_24_4", week_24_5:"week_24_5", week_24_6:"week_24_6", week_24_7:"week_24_7", week_25_1:"week_25_1", week_25_2:"week_25_2", week_25_3:"week_25_3", week_25_4:"week_25_4", week_25_5:"week_25_5", week_25_6:"week_25_6", week_25_7:"week_25_7"},
            {id:9, type:"批次号", batch_number:"batch_number", version:"version", item_number:"item_number", week_19_1:"week_19_1", week_19_2:"week_19_2", week_19_3:"week_19_3", week_19_4:"week_19_4", week_19_5:"week_19_5", week_19_6:"week_19_6", week_19_7:"week_19_7", week_20_1:"week_20_1", week_20_2:"week_20_2", week_20_3:"week_20_3", week_20_4:"week_20_4", week_20_5:"week_20_5", week_20_6:"week_20_6", week_20_7:"week_20_7", week_21_1:"week_21_1", week_21_2:"week_21_2", week_21_3:"week_21_3", week_21_4:"week_21_4", week_21_5:"week_21_5", week_21_6:"week_21_6", week_21_7:"week_21_7", week_22_1:"week_22_1", week_22_2:"week_22_2", week_22_3:"week_22_3", week_22_4:"week_22_4", week_22_5:"week_22_5", week_22_6:"week_22_6", week_22_7:"week_22_7", week_23_1:"week_23_1", week_23_2:"week_23_2", week_23_3:"week_23_3", week_23_4:"week_23_4", week_23_5:"week_23_5", week_23_6:"week_23_6", week_23_7:"week_23_7", week_24_1:"week_24_1", week_24_2:"week_24_2", week_24_3:"week_24_3", week_24_4:"week_24_4", week_24_5:"week_24_5", week_24_6:"week_24_6", week_24_7:"week_24_7", week_25_1:"week_25_1", week_25_2:"week_25_2", week_25_3:"week_25_3", week_25_4:"week_25_4", week_25_5:"week_25_5", week_25_6:"week_25_6", week_25_7:"week_25_7"},
            {id:10, type:"批次号", batch_number:"batch_number", version:"version", item_number:"item_number", week_19_1:"week_19_1", week_19_2:"week_19_2", week_19_3:"week_19_3", week_19_4:"week_19_4", week_19_5:"week_19_5", week_19_6:"week_19_6", week_19_7:"week_19_7", week_20_1:"week_20_1", week_20_2:"week_20_2", week_20_3:"week_20_3", week_20_4:"week_20_4", week_20_5:"week_20_5", week_20_6:"week_20_6", week_20_7:"week_20_7", week_21_1:"week_21_1", week_21_2:"week_21_2", week_21_3:"week_21_3", week_21_4:"week_21_4", week_21_5:"week_21_5", week_21_6:"week_21_6", week_21_7:"week_21_7", week_22_1:"week_22_1", week_22_2:"week_22_2", week_22_3:"week_22_3", week_22_4:"week_22_4", week_22_5:"week_22_5", week_22_6:"week_22_6", week_22_7:"week_22_7", week_23_1:"week_23_1", week_23_2:"week_23_2", week_23_3:"week_23_3", week_23_4:"week_23_4", week_23_5:"week_23_5", week_23_6:"week_23_6", week_23_7:"week_23_7", week_24_1:"week_24_1", week_24_2:"week_24_2", week_24_3:"week_24_3", week_24_4:"week_24_4", week_24_5:"week_24_5", week_24_6:"week_24_6", week_24_7:"week_24_7", week_25_1:"week_25_1", week_25_2:"week_25_2", week_25_3:"week_25_3", week_25_4:"week_25_4", week_25_5:"week_25_5", week_25_6:"week_25_6", week_25_7:"week_25_7"},
            {id:11, type:"批次号", batch_number:"batch_number", version:"version", item_number:"item_number", week_19_1:"week_19_1", week_19_2:"week_19_2", week_19_3:"week_19_3", week_19_4:"week_19_4", week_19_5:"week_19_5", week_19_6:"week_19_6", week_19_7:"week_19_7", week_20_1:"week_20_1", week_20_2:"week_20_2", week_20_3:"week_20_3", week_20_4:"week_20_4", week_20_5:"week_20_5", week_20_6:"week_20_6", week_20_7:"week_20_7", week_21_1:"week_21_1", week_21_2:"week_21_2", week_21_3:"week_21_3", week_21_4:"week_21_4", week_21_5:"week_21_5", week_21_6:"week_21_6", week_21_7:"week_21_7", week_22_1:"week_22_1", week_22_2:"week_22_2", week_22_3:"week_22_3", week_22_4:"week_22_4", week_22_5:"week_22_5", week_22_6:"week_22_6", week_22_7:"week_22_7", week_23_1:"week_23_1", week_23_2:"week_23_2", week_23_3:"week_23_3", week_23_4:"week_23_4", week_23_5:"week_23_5", week_23_6:"week_23_6", week_23_7:"week_23_7", week_24_1:"week_24_1", week_24_2:"week_24_2", week_24_3:"week_24_3", week_24_4:"week_24_4", week_24_5:"week_24_5", week_24_6:"week_24_6", week_24_7:"week_24_7", week_25_1:"week_25_1", week_25_2:"week_25_2", week_25_3:"week_25_3", week_25_4:"week_25_4", week_25_5:"week_25_5", week_25_6:"week_25_6", week_25_7:"week_25_7"},
        ]
        
        this.right_table = new Tabulator(this.rightTreeRef.el, {
            columnHeaderVertAlign: "bottom",
            data: cheeseData,
            columns: [
                { title: "批次号", field: "batch_number", width: 160 },
                { title: "版本", field: "version", width: 160 },
                { title: "品号", field: "item_number", width: 160 },
                {
                    title: "第19周",
                    columns: [
                        { title: "7.21", field: "week_19_1", width: 160 },
                        { title: "7.22", field: "week_19_2", width: 160 },
                        { title: "7.23", field: "week_19_3", width: 160 },
                        { title: "7.24", field: "week_19_4", width: 160 },
                        { title: "7.25", field: "week_19_5", width: 160 },
                        { title: "7.26", field: "week_19_6", width: 160 },
                        { title: "7.27", field: "week_19_7", width: 160 },
                    ],
                },
                {
                    title: "第20周",
                    columns: [
                        { title: "7.28", field: "week_20_1", width: 160 },
                        { title: "7.29", field: "week_20_2", width: 160 },
                        { title: "7.30", field: "week_20_3", width: 160 },
                        { title: "7.31", field: "week_20_4", width: 160 },
                        { title: "8.1", field: "week_20_5", width: 160 },
                        { title: "8.2", field: "week_20_6", width: 160 },
                        { title: "8.3", field: "week_20_7", width: 160 },
                    ],
                },
                {
                    title: "第21周",
                    columns: [
                        { title: "8.4", field: "week_21_1", width: 160 },
                        { title: "8.5", field: "week_21_2", width: 160 },
                        { title: "8.6", field: "week_21_3", width: 160 },
                        { title: "8.7", field: "week_21_4", width: 160 },
                        { title: "8.8", field: "week_21_5", width: 160 },
                        { title: "8.9", field: "week_21_6", width: 160 },
                        { title: "8.10", field: "week_21_7", width: 160 },
                    ],
                },
                {
                    title: "第22周",
                    columns: [
                        { title: "8.11", field: "week_22_1", width: 160 },
                        { title: "8.12", field: "week_22_2", width: 160 },
                        { title: "8.13", field: "week_22_3", width: 160 },
                        { title: "8.14", field: "week_22_4", width: 160 },
                        { title: "8.15", field: "week_22_5", width: 160 },
                        { title: "8.16", field: "week_22_6", width: 160 },
                        { title: "8.17", field: "week_22_7", width: 160 },
                    ],
                },
                {
                    title: "第23周",
                    columns: [
                        { title: "8.18", field: "week_23_1", width: 160 },
                        { title: "8.19", field: "week_23_2", width: 160 },
                        { title: "8.20", field: "week_23_3", width: 160 },
                        { title: "8.21", field: "week_23_4", width: 160 },
                        { title: "8.22", field: "week_23_5", width: 160 },
                        { title: "8.23", field: "week_23_6", width: 160 },
                        { title: "8.24", field: "week_23_7", width: 160 },
                    ],
                },
                {
                    title: "第24周",
                    columns: [
                        { title: "8.25", field: "week_24_1", width: 160 },
                        { title: "8.26", field: "week_24_2", width: 160 },
                        { title: "8.27", field: "week_24_3", width: 160 },
                        { title: "8.28", field: "week_24_4", width: 160 },
                        { title: "8.29", field: "week_24_5", width: 160 },
                        { title: "8.30", field: "week_24_6", width: 160 },
                        { title: "8.31", field: "week_24_7", width: 160 },
                    ],
                },
                {
                    title: "第25周",
                    columns: [
                        { title: "9.1", field: "week_25_1", width: 160 },
                        { title: "9.2", field: "week_25_2", width: 160 },
                        { title: "9.3", field: "week_25_3", width: 160 },
                        { title: "9.4", field: "week_25_4", width: 160 },
                        { title: "9.5", field: "week_25_5", width: 160 },
                        { title: "9.6", field: "week_25_6", width: 160 },
                        { title: "9.7", field: "week_25_7", width: 160 },
                    ]
                },
            ]
        });
    }

}

LrpPlan.template = "lrp_plan.plan";
LrpPlan.components = {
    YlhcSubForm: YlhcSubForm,
};

registry.category("actions").add("lrp_plan", LrpPlan);
