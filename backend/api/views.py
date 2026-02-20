import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt 
def calculate_commission(request):
    if request.method == 'POST':
        try:
            
            data = json.loads(request.body)
            sales_amount = float(data.get('Sales_Amount', 0))
            target_amount = float(data.get('Target_Amount', 0))
            
            
            if target_amount > 0 and sales_amount >= (0.8 * target_amount):
                commission = 0.05 * sales_amount
            else:
                commission = 0.0
                
            return JsonResponse({'commission': commission}, status=200)
            
        except (ValueError, TypeError):
            return JsonResponse({'error': 'Invalid input. Please send numbers.'}, status=400)
            
    return JsonResponse({'error': 'Only POST method is allowed'}, status=405)