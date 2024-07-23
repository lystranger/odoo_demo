from odoo import models, fields

class DailyCompletionStatus(models.Model):
    """
    Daily Completion Status
    """
    _name = 'lrp_plan.daily_completion_status'
    _description = 'Daily Completion Status'

    production_plan_id = fields.Integer(string='生产计划ID', required=True)
    daily_planned_quantity = fields.Float(string='每日计划数', required=True)
    daily_completed_quantity = fields.Float(string='每日完工数', required=True)
    daily_completion_rate = fields.Float(string='每日完成率', required=True)
    date = fields.Date(string='日期', required=True)
    week_number = fields.Integer(string='周数', required=True)
