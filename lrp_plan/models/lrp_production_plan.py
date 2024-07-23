from odoo import models, fields

class ProductionPlan(models.Model):
    """
    Production Plan
    """
    _name = 'lrp_plan.production_plan'
    _description = 'Production Plan'

    lrp_plan = fields.Integer(string='LRP计划')
    product_code = fields.Char(string='品号', size=20)
    specification = fields.Char(string='规格', size=50)
    product_name = fields.Char(string='品名', size=50)
    production_quantity = fields.Float(string='生产数量')
    unit = fields.Integer(string='单位')
    start_date = fields.Date(string='开工日')
    end_date = fields.Date(string='完成日')
    outsourcing_supplier = fields.Integer(string='委外供应商')
    work_center = fields.Integer(string='工作中心')
    batch_number = fields.Char(string='批次号', size=10)
    fixed_lead_time = fields.Float(string='固定前置天数')
    variable_lead_time = fields.Float(string='变动前置天数')
    warehouse = fields.Integer(string='仓库')
    processing_unit = fields.Integer(string='加工单位')
    currency = fields.Integer(string='币种')
    outsourcing_unit_price = fields.Float(string='委外单位价')
    source_order_number = fields.Char(string='来源单号', size=20)
    source_order_type = fields.Char(string='来源单类型', size=20)
    finished_product_demand_date = fields.Date(string='产成品需求日')
    inventory_quantity = fields.Float(string='库存数量')
    safety_inventory_quantity = fields.Float(string='安全库存数量')
    projected_progress = fields.Float(string='预计进货')
    projected_purchase = fields.Float(string='预计请购')
    projected_production = fields.Float(string='预计生产')
    projected_sales = fields.Float(string='预计销售')
    projected_requisition = fields.Float(string='预计领用')
    planned_purchase = fields.Float(string='计划采购')
    planned_production = fields.Float(string='计划生产')
    planned_requisition = fields.Float(string='计划领用')
    borrowed_quantity = fields.Float(string='被借代量')
    lent_quantity = fields.Float(string='替他量')
    gross_demand_quantity = fields.Float(string='毛需求量')
    already_shipped_quantity = fields.Float(string='已发量')
    original_production_quantity = fields.Float(string='原始需求生产量')
    start_date_reserved_days = fields.Float(string='开工日占用天数')
    end_date_reserved_days = fields.Float(string='完成日占用天数')
    first_batch_start_reserved_days = fields.Float(string='第一批量开工日占用天数')
    last_batch_start_reserved_days = fields.Float(string='最后一批量开工日占用天数')
