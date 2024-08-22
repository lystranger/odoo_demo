from odoo import models, fields

class LRPPlan(models.Model):
    """
    LRP Plan
    """
    _name = 'sz_plan.plan'
    _description = 'LRP Plan'

    plan_batch_number = fields.Char(string='计划批次号', size=20, required=True)
    factory = fields.Integer(string='工厂', required=True)
    status = fields.Char(string='状态', size=2, required=True)
    version = fields.Integer(string='版本', required=True)
    update_date = fields.Date(string='更新日期', required=True)
    plan_date = fields.Date(string='计划日期', required=True)
    remark = fields.Char(string='备注', size=500)
